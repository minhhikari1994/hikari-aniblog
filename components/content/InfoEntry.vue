<template>
    <UAlert
        icon="i-heroicons-info"
        color="blue"
        variant="subtle"
        :description="content"
    />
</template>


<script setup>
defineProps([
    'content'
])
</script>