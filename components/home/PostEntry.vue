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
                <NuxtLink :to="post._path" class="author"><span class="name">{{ post.author }}</span>
                    <NuxtImg format="webp" :src="post.authorAvatar" alt="" loading="lazy" />
                </NuxtLink>

            </div>
        </header>
        <NuxtLink :to="post._path" class="image featured">
            <NuxtImg format="webp" :src="post.feature_image" :alt="post.title" loading="lazy" />
        </NuxtLink>

        <div class="mb-5">
            <ContentRendererMarkdown :value="getFirstParagraph(post)" />
        </div>

        <footer>
            <ul class="actions">
                <li>
                    <NuxtLink :to="post._path" class="button large">{{ $t('continueReading') }}</NuxtLink>
                </li>
            </ul>
            <ul class="stats">
                <li v-for="tag in post.tags" :key="tag">
                    <NuxtLink :to="`/tags/${tag}/page/1`" external>{{ tag }}</NuxtLink>
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