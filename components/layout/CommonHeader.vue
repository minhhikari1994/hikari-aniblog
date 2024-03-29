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
                    <a class="fa-search" href="#search">{{ $t("search") }}</a>
                    <form id="search" @submit.prevent="triggerSearch">
                        <input type="text" name="query" v-model="searchTerm" :placeholder="$t('search')" />
                    </form>
                </li>
                <li class="">
                    <UButton size="xs" class="h-full w-full text-black" icon="i-heroicons-pencil-square" @click="switchLanguage()">
                        <span v-if="locale === 'vi'">Chuyen qua Tieng Anh</span>
                        <span v-if="locale === 'en'">Switch to Vietnamese</span>
                    </UButton>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const { locale, setLocale } = useI18n()
const searchTerm = ref("")

const triggerSearch = () => {
    if (searchTerm.value) {
        navigateTo(`/search/page/1?q=${searchTerm.value}`, { external: true });
    }
}

const switchLanguage = () => {
    const switchToLang = locale.value === 'vi' ? 'en' : 'vi'
    setLocale(switchToLang)
}

</script>