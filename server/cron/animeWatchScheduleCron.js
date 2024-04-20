import fs from 'fs'
import { defineCronHandler } from '#nuxt/cron'
import dailyAnimeIDs from './dailyAnimeIDs.json'

const populateAnimeListForWeekDay = (weekDayKey, animeIDs, MALData) => {
    const dailyAnimeObj = {
        weekDay: weekDayKey,
        animeList: []
    }
    for (const animeID of animeIDs) {
        const animeMALData = MALData.data.find(anime => anime.node.id === animeID)
        if (!animeMALData) {
            continue
        }
        const animeObj = {
            name: animeMALData.node.title,
            malId: animeMALData.node.id,
            status: animeMALData.list_status.status,
            episode: `${animeMALData.list_status.num_episodes_watched}/${animeMALData.node.num_episodes || '?'} `,
        }
        dailyAnimeObj.animeList.push(animeObj)

    }

    return dailyAnimeObj;
}

const fetchMALData = async () => {
    try {
        const malResponse = await $fetch('https://api.myanimelist.net/v2/users/minhhikari1994/animelist', {
            query: {
                limit: 1000,
                sort: 'list_updated_at',
                fields: 'list_status,num_episodes',
                nsfw: true
            },
            headers: {
                'X-MAL-CLIENT-ID': process.env.MAL_API_KEY
            }
        })
        return malResponse
    } catch (err) {
        console.error('======================Failed to fetch MAL data=======================')
        console.error(err);
        console.error('================= End Failed to fetch MAL data log===================')
        return null
    }
}

const populateDailyAnimeSchedule = async () => {
    const result = []
    const malData = await fetchMALData()
    if (malData) {
        for (const [dayKey, animeIDs] of Object.entries(dailyAnimeIDs)) {
            result.push(populateAnimeListForWeekDay(dayKey, animeIDs, malData))
        }
    }

    return result
}

export default defineCronHandler('daily', async () => {
    console.log('Populating daily anime schedule..,', new Date().toLocaleString())
    const result = await populateDailyAnimeSchedule()
    fs.writeFileSync('./public/dailyAnimeSchedule.json', JSON.stringify(result), 'utf-8')
}, { runOnInit: true, timeZone: 'UTC+7' })