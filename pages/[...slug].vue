<template>
  <NuxtLayout name="singlepost">
    <div id="main">
      <ContentDoc v-slot="{ doc }">
        <article class="post">
          <header>
            <div class="title">
              <h2><a href="#">
                  {{ doc.title }}
                </a></h2>
              <p>{{ doc.description }}</p>
            </div>
            <div class="meta">
              <time class="published" datetime="2015-11-01">{{ doc.published_date }}</time>
              <a href="#" class="author"><span class="name">Minh Hikari</span><NuxtImg format="webp" src="/images/avatar.jpg" alt=""
                  loading="lazy" /></a>
            </div>
          </header>
          <span class="image featured"><NuxtImg format="webp" :src="doc.feature_image" alt="" loading="lazy" /></span>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();
const { locale } = useI18n();
const { data: currentPage } = await useAsyncData('post', () => queryContent(route.path).findOne())
const postId = currentPage.value.id

useSeoMeta({
  title: currentPage.value.title,
  ogTitle: currentPage.value.title,
  description: currentPage.value.description,
  ogDescription: currentPage.value.description,
  ogImage: currentPage.value.feature_image,
  twitterCard: 'summary_large_image',
})
</script>
