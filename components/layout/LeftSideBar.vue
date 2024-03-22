<template>
    <section id="sidebar">

        <section id="intro">
            <a href="#" class="logo"><img src="/images/logo.jpg" alt="" /></a>
            <header>
                <h2>Hikari's AniBlog</h2>
                <p>Just a blog for my anime hobby</p>
            </header>
        </section>

        <section class="blurb" id="mal-profile">
            <h2>MyAnimeList Profile</h2>
            <NuxtLink to="https://myanimelist.net/profile/minhhikari1994">
                <img class="w-full" src="/images/pic02.jpg" alt="" />
            </NuxtLink>
        </section>

        <section class="blurb" id="hikari-melody-yt">
            <h2>Hikari Melody Youtube</h2>
            <NuxtLink to="https://youtube.com/c/hikarimelody">
                <img class="w-full" src="/images/pic02.jpg" alt="" />
            </NuxtLink>
        </section>

        <section class="blurb" id="anime-watching-plan">
            <h2>Anime watching plan</h2>
            <UAccordion :items="items">
                <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700 h-auto">

                        <span class="truncate">{{ item.label }}</span>

                        <template #trailing>
                            <UIcon name="i-heroicons-chevron-right-20-solid"
                                class="w-1 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']" />
                        </template>
                    </UButton>
                </template>
            </UAccordion>
        </section>

    </section>
</template>

<script setup>
const items = [{
    label: 'Monday',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
    label: 'Tuesday',
    content: 'Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
    label: 'Wednesday',
    content: 'Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
    label: 'Thursday',
    content: 'Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
    label: 'Friday',
    content: 'Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
    label: 'Saturday',
    content: 'Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
    label: 'Sunday',
    content: 'Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, 
]

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