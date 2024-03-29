<template>
    <div id="main">
        <h2>All post with search term: {{ searchTerm }}</h2>
        <HomePostEntry v-for="post in postList" :post="post" :key="post.id" />
        <ul class="actions pagination">
            <li>
                <NuxtLink :to="populatePagePath(previousPage)" class="button large previous"
                    :class="{ disabled: previousPage <= 0 }">{{ $t("previousPage") }}</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="populatePagePath(nextPage)" class="button large next"
                    :class="{ disabled: currentPage * pageSize >= totalNumberOfPosts }">{{ $t("nextPage") }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>


<script setup>

const route = useRoute();
const searchTerm = route.query.q
const currentPage = Number(route.params.page_number || '1')
const nextPage = currentPage + 1
const previousPage = currentPage - 1
const pageSize = 2

const { data: totalNumberOfPosts } = await useAsyncData('search_count', () => 
    queryContent('/').where({ title: { $regex: `/.*${searchTerm}.*/i` } }).count()
)

const { data: postList } = await useAsyncData('search', () =>
    queryContent('/')
        .where({ title: { $regex: `/.*${searchTerm}.*/i` } })
        .sort({ published_date: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .find()
);

const populatePagePath = (pageNumber) => {
    return `/search/page/${pageNumber}?q=${route.query.q}`
}


</script>