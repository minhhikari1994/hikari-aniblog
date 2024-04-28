export default defineEventHandler((event) => {
    const dailyScheduleObj = useStorage().getItem('dailyAnimeSchedule')
    return dailyScheduleObj
})