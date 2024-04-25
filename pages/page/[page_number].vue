<template>
    <NuxtContent>
        <div id="main">
            <HomePostEntry v-for="post in postList.data.value" :post="post" :key="post.id" />
            <ul class="actions pagination">
                <li>
                    <NuxtLink :to="previousPage.toString()" class="button large previous"
                        :class="{ disabled: previousPage <= 0 }">Previous Page</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="nextPage.toString()" class="button large next"
                        :class="{ disabled: currentPage * pageSize >= totalNumberOfPosts }">Next Page</NuxtLink>
                </li>
            </ul>

        </div>
    </NuxtContent>
</template>


<script setup>
const route = useRoute();
const { locale } = useI18n();
const currentPage = Number(route.params.page_number || '1')
const nextPage = currentPage + 1
const previousPage = currentPage - 1
const pageSize = 5

const { data: totalNumberOfPosts } = await useAsyncData('home_count', () => queryContent(`/${locale.value}`).count())

const { data: postList } = await useAsyncData('home', () =>
    queryContent(`/${locale.value}`)
        .sort({ published_date: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .find()
);



</script>