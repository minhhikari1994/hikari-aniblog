export default defineEventHandler((event) => {
    const dailyScheduleObj = useStorage().getItem('dailyAnimeSchedule')
    if (!dailyScheduleObj) {
        return []
    }
    return dailyScheduleObj
})