<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const route = useRoute();
const langQueryParam = route.query.lang
if (langQueryParam && ['en','vi'].includes(langQueryParam)) {
  setLocale(langQueryParam)
}
</script>
