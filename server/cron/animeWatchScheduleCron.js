import fs from 'fs'
import { defineCronHandler } from '#nuxt/cron';
import dailyAnimeIDs from './dailyAnimeIDs.json'
import MALData from './MALResponseData.json';

const populateAnimeListForWeekDay = (weekDayKey, animeIDs) => {
    
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

const populateDailyAnimeSchedule = () => {
    const result = []
    for (const [dayKey, animeIDs] of Object.entries(dailyAnimeIDs)) {
        result.push(populateAnimeListForWeekDay(dayKey, animeIDs))
    }

    return result
}

export default defineCronHandler('daily', () => {
    const result = populateDailyAnimeSchedule()
    fs.writeFileSync('./public/dailyAnimeSchedule.json', JSON.stringify(result), 'utf-8')
}, { runOnInit: true })