<template>
    <div class="box m-auto w-9 my-3">
        <div class="grid">
            <div class="col-12 lg:col-4 ">
                <img class="w-full" :src="image" :alt="name" />
            </div>
            <div class="col-12 lg:col-8 text-center m-auto px-3">
                <div>
                    <h2>{{ name }}</h2>
                </div>

                <div><b>Xưởng phim <i>(Studios)</i></b></div>
                <div>{{ studios }}</div>

                <div><b>Thể loại <i>(Genres)</i></b></div>
                <div>{{ genres }}</div>

                <div><b>Thời lượng <i>(Duration)</i></b></div>
                <div>{{ duration }}</div>

                <div><b>Ngày ra rạp <i>(Theatrical release date)</i></b></div>
                <div>{{ theatrical_release }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['name', 'image', 'studios', 'genres', 'duration', 'theatrical_release'])
</script>