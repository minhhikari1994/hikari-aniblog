<template>
    <!-- Main -->
    <div id="main">

        <!-- Post -->
        <h2>{{ $t('allPostsWithTag') }} {{ $route.params.tag_name }}</h2>

        <HomePostEntry v-for="post in postList" :post="post" :key="post.id" />

        <!-- Pagination -->
        <ul class="actions pagination">
            <li>
                <NuxtLink :to="previousPage.toString()" class="button large previous"
                    :class="{ disabled: previousPage <= 0 }">{{ $t("previousPage") }}</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="nextPage.toString()" class="button large next"
                    :class="{ disabled: currentPage * pageSize >= totalNumberOfPosts }">{{ $t("nextPage") }}</NuxtLink>
            </li>
        </ul>

    </div>
</template>


<script setup>
const { locale } = useI18n();
const route = useRoute();
const currentPage = Number(route.params.page_number || '1')
const nextPage = currentPage + 1
const previousPage = currentPage - 1
const pageSize = 5

const { data: totalNumberOfPosts} = await useAsyncData('tags_count', () =>
    queryContent(`/${locale.value}`).where({ tags: { $contains: useRoute().params.tag_name } }).count()
)

const { data: postList } = await useAsyncData('tags', () =>
    queryContent(`/${locale.value}`)
        .where({ tags: { $contains: useRoute().params.tag_name } })
        .sort({ published_date: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .find()
);



</script>