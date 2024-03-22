<template>
    <div id="main">
        <HomePostEntry v-for="post in postList" :post="post" :key="post._id" />
        <ul class="actions pagination">
            <li>
                <NuxtLink :to="`page/${nextPage.toString()}`" class="button large previous"
                    :class="{ disabled: previousPage <= 0 }">Previous Page</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="`page/${nextPage.toString()}`" class="button large next"
                    :class="{ disabled: currentPage * pageSize >= totalNumberOfPosts }">Next Page</NuxtLink>
            </li>
        </ul>
    </div>
</template>


<script setup>

const route = useRoute();
const currentPage = Number(route.params.page_number || '1')
const nextPage = currentPage + 1
const previousPage = currentPage - 1
const pageSize = 5

const { data: totalNumberOfPosts } = await useAsyncData('home_count', () => queryContent('/').count())

const { data: postList } = await useAsyncData('home', () =>
    queryContent('/')
        .sort({ published_date: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .find()
);

</script>