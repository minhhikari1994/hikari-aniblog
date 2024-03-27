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

        <AnimeWatchSchedule></AnimeWatchSchedule>

    </section>
</template>

<script setup>
import AnimeWatchSchedule from './AnimeWatchSchedule.vue';
</script>