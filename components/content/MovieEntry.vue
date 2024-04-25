<template>
    <div class="box m-auto xl:w-9 w-12 my-3">
        <div class="grid">
            <div class="col-12 lg:col-4 ">
                <NuxtImg format="webp" class="w-full" :src="image" :alt="name" loading="lazy"/>
            </div>
            <div class="col-12 lg:col-8 text-center m-auto px-3">
                <div>
                    <h2>{{ name }}</h2>
                </div>

                <div><b>{{ $t('studios') }}</b></div>
                <div>{{ studios }}</div>

                <div><b>{{ $t('genres') }}</b></div>
                <div>{{ genres }}</div>

                <div><b>{{ $t('duration') }}</b></div>
                <div>{{ duration }}</div>

                <div><b>{{ $t('theatricalReleaseDate') }}</b></div>
                <div>{{ theatrical_release }}</div>

                <template v-if="with_score">
                    <div><b>{{ $t('rating_title') }}</b></div>
                    <div>{{ $t('mal_score_title') }} : {{ `${mal_score} / 10 (${mal_number_of_rates} ${$t('mal_rating_title')})` }}</div>
                    <div>{{ $t('personal_score_title') }} : {{ `${personal_score} / 10` }}</div>
                </template>

            </div>
        </div>
    </div>
</template>

<script setup>
defineProps([
    'name',
    'image',
    'studios',
    'genres',
    'duration',
    'theatrical_release',
    'with_score',
    'mal_score',
    'mal_number_of_rates',
    'personal_score'
])
</script>