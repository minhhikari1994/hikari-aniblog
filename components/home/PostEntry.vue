<template>
    <article class="post">
        <header>
            <div class="title">
                <h2>
                    <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
                </h2>
                <p>{{ post.description }}</p>
            </div>
            <div class="meta">
                <time class="published" :datetime="post.date">{{ post.published_date }}</time>
                <NuxtLink :to="post._path" class="author"><span class="name">{{ post.author }}</span><img
                        :src="post.authorAvatar" alt="" /></NuxtLink>

            </div>
        </header>
        <NuxtLink :to="post._path" class="image featured">
            <img :src="post.feature_image" :alt="post.title" />
        </NuxtLink>
        <p>
            <ContentRendererMarkdown :value="getFirstParagraph(post)" />
        </p>
        <footer>
            <ul class="actions">
                <li>
                    <NuxtLink :to="post._path" class="button large">Continue Reading</NuxtLink>
                </li>
            </ul>
            <ul class="stats">
                <li v-for="tag in post.tags" :key="tag">
                    <NuxtLink :to="`/tags/${tag}/page/1`">{{ tag }}</NuxtLink>
                </li>
            </ul>
        </footer>
    </article>
</template>

<script setup>
const props = defineProps({
    post: Object
})

const getFirstParagraph = (post) => {
    const firstParagraph = post.body.children.find((ele) => ele.tag === 'p')
    return firstParagraph
}

</script>