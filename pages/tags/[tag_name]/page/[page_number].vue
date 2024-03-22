<template>
    <!-- Main -->
    <div id="main">

        <!-- Post -->
        <h2>All posts with tag: {{ $route.params.tag_name }}</h2>

        <HomePostEntry v-for="post in postList" :post="post" :key="post.id" />

        <!-- Pagination -->
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
</template>


<script setup>

const route = useRoute();
const currentPage = Number(route.params.page_number || '1')
const nextPage = currentPage + 1
const previousPage = currentPage - 1
const pageSize = 5

const { data: totalNumberOfPosts} = await useAsyncData('tags_count', () =>
    queryContent('/').where({ tags: { $contains: useRoute().params.tag_name } }).count()
)

const { data: postList } = await useAsyncData('tags', () =>
    queryContent('/')
        .where({ tags: { $contains: useRoute().params.tag_name } })
        .sort({ published_date: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .find()
);



</script>