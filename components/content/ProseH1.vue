<template>
    <div class="box border-3 w-full mx-auto my-5 text-center custom-header">
        <h1 class="text-2xl mb-2 text-white">
            <slot />
        </h1>
    </div>
</template>

<style lang="scss">
    .custom-header {
        background: #24205a;
    }
</style>

