<template>
    <div class="box m-auto xl:w-9 w-12 my-3">
        <div class="grid">
            <div class="col-12 lg:col-4 text-center">
                <NuxtImg fit="contain" format="webp" class="lg:w-full w-8 m-auto" :src="image" :alt="name" loading="lazy"/>
            </div>
            <div class="col-12 lg:col-8 text-center m-auto px-3">
                <div>
                    <h2>{{ name }}</h2>
                </div>

                <div><b>{{ $t('studios') }}</b></div>
                <div>{{ studios }}</div>

                <div><b>{{ $t('genres') }}</b></div>
                <div>{{ genres }}</div>

                <template v-if="with_score">
                    <div><b>{{ $t('rating_title') }}</b></div>
                    <div>{{ $t('mal_score_title') }} : {{ `${mal_score} / 10 (${mal_number_of_rates} ${$t('mal_rating_title')})` }}</div>
                    <div>{{ $t('personal_score_title') }} : {{ `${personal_score} / 10` }}</div>
                </template>
                
                <template v-if="anime_of_the_season">
                    <div class="row" style="margin-top: 1rem;">
                        <div class="col-12 text-center">
                            <h3 style="color: #f56a6a;">
                                {{ $t(
                                    'personal_aots',
                                    { 
                                        season_name_key: $t(aots_season_name_key),
                                        season_year: aots_season_year
                                    }
                                ) }}
                            </h3>
                        </div>
                    </div>
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
    'with_score',
    'mal_score',
    'mal_number_of_rates',
    'personal_score',
    'anime_of_the_season',
    'aots_season_name_key',
    'aots_season_year'
])
</script>