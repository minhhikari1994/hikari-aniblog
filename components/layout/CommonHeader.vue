<template>
    <!-- Header -->
    <header id="header">
        <h1>
            <NuxtLink to="/">Hikari's AniBlog</NuxtLink>
        </h1>
        <nav class="links">
            <ul>
                <li><a href="#">Lorem</a></li>
                <li><a href="#">Ipsum</a></li>
                <li><a href="#">Feugiat</a></li>
                <li><a href="#">Tempus</a></li>
                <li><a href="#">Adipiscing</a></li>
            </ul>
        </nav>
        <nav class="main">
            <ul>
                <li class="search">
                    <a class="fa-search" href="#search">Search</a>
                    <form id="search" @submit.prevent="triggerSearch">
                        <input type="text" name="query" v-model="searchTerm" placeholder="Search" />
                    </form>
                </li>
                <li class="menu">
                    <a class="fa-bars" href="#menu">Menu</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>

const searchTerm = ref("")

const triggerSearch = () => {
    if (searchTerm.value) {
        navigateTo(`/search/page/1?q=${searchTerm.value}`, { external: true });
    }
}

</script>