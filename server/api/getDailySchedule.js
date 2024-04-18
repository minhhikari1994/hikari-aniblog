import dailyAnimeSchedule from '../cron/dailyAnimeSchedule.json'

export default defineEventHandler((event) => {
    return dailyAnimeSchedule
})