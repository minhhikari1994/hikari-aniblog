<!-- <template>
  <main>
    <ContentDoc />
  </main>
</template> -->

<template>
  <!-- Main -->
  <div id="main">
    <!-- Post -->
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
            <a href="#" class="author"><span class="name">Minh Hikari</span><img src="/images/avatar.jpg" alt="" /></a>
          </div>
        </header>
        <span class="image featured"><img :src="doc.feature_image" alt="" /></span>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>