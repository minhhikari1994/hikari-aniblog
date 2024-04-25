<template>
    <NuxtLayout>
        <div id="main">
            <HomePostEntry v-for="post in postList" :post="post" :key="post._id" />
            <ul class="actions pagination">
                <li>
                    <NuxtLink :to="`page/${nextPage.toString()}`" class="button large previous"
                        :class="{ disabled: previousPage <= 0 }">{{ $t("previousPage") }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="`page/${nextPage.toString()}`" class="button large next"
                        :class="{ disabled: currentPage * pageSize >= totalNumberOfPosts }">{{ $t("nextPage") }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </NuxtLayout>
</template>


<script setup>
const { locale } = useI18n();
const route = useRoute();
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