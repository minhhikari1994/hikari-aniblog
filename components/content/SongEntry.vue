<template>
    <div class="box m-auto xl:w-9 w-12 my-3">
        <div class="grid">
            <div class="col-12 lg:col-4 ">
                <img class="w-full" :src="image" :alt="name" />
            </div>
            <div class="col-12 lg:col-8 text-center m-auto px-3">
                <div>
                    <h2>{{ name }}</h2>
                </div>

                <div><b>{{ $t('composedBy') }}</b></div>
                <div>{{ composed_by }}</div>

                <div><b>{{ $t('singer') }}</b></div>
                <div>{{ singer }}</div>

                <div><b>{{ $t('anime') }}</b></div>
                <div>{{ anime }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['name', 'image', 'composed_by', 'singer', 'anime'])
</script>