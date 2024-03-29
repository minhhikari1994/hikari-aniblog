<template>
    <section class="blurb" id="anime-watching-plan">
            <h2>{{ $t('animeWatchSchedule') }}</h2>
            <UAccordion :items="animeSchedule">
                <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700 h-auto">
                        
                        <span class="truncate">{{ $t(item.weekDay) }}</span>

                        <template #trailing>
                            <UIcon name="i-heroicons-chevron-right-20-solid"
                                class="w-1 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']" />
                        </template>
                    </UButton>
                </template>
                <template #item="{ item }">
                    <ul>
                        <li v-for="anime in item.animeList" :key="anime.malId" class="text-lg">
                            <NuxtLink :to="`https://myanimelist.net/anime/${anime.malId}`" target="_blank">
                                {{ anime.name }} ({{ anime.episode }})
                            </NuxtLink> - {{ anime.status }}
                            
                        </li>
                    </ul>
                </template>              
            </UAccordion>
        </section>
</template>

<script setup>
const animeSchedule = [{
    weekDay: 'monday',
    animeList: [
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
    ]
}, {
    weekDay: 'tuesday',
    animeList: [
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
    ]
}, {
    weekDay: 'wednesday',
    animeList: [
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
    ]
},{
    weekDay: 'thursday',
    animeList: [
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
    ]
},{
    weekDay: 'friday',
    animeList: [
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
    ]
},{
    weekDay: 'saturday',
    animeList: [
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
    ]
},{
    weekDay: 'sunday',
    animeList: [
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
        { name: 'Sousou no Frieren', malId: 52991, episode: '28/28', status: 'Finished' },
    ]
}]
</script>

<style lang="scss" scoped>
.custom-accordion {
    button {
        .w-5 {
            width: 1;
        }
    }
}
</style>