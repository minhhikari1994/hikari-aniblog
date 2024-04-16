<template>
    <!-- Header -->
    <header id="header">
        <h1>
            <NuxtLink to="/" external>Hikari's AniBlog</NuxtLink>
        </h1>
        <nav class="links">
            <ul>
                <!-- <li><a href="#">Lorem</a></li>
                <li><a href="#">Ipsum</a></li>
                <li><a href="#">Feugiat</a></li>
                <li><a href="#">Tempus</a></li>
                <li><a href="#">Adipiscing</a></li> -->
                <li>
                    <NuxtLink to="/tags/2024/page/1" external>2024</NuxtLink>
                </li>
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
                    <button class="h-full" @click="switchLanguage()">
                        {{ locale === 'vi' ? 'Tiếng Việt' : 'English'  }}
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const { locale, setLocale } = useI18n()
const searchTerm = ref("")
const route = useRoute()

const triggerSearch = () => {
    if (searchTerm.value) {
        navigateTo(`/search/page/1?q=${searchTerm.value}`, { external: true });
    }
}

const navigateToOtherLanguagePost = async() => {
    const { data : currentPage } = await useAsyncData('post', () => queryContent(route.fullPath).findOne())
    const postId = currentPage.value.id
    const { data : destinationPage } = await useAsyncData('post-in-other-language', () => queryContent(`/${locale.value}`)
        .where({ id: { $eq: postId } })
        .findOne()
    )
    navigateTo(destinationPage.value._path)
}

const switchLanguage = () => {
    const switchToLang = locale.value === 'vi' ? 'en' : 'vi'
    setLocale(switchToLang)
    if (route.name !== "slug") {
        navigateTo({
            path: route.path,
            query: {
                lang: switchToLang
            }
        }, { external: true })
    } else {
        navigateToOtherLanguagePost()
    }
}

</script>