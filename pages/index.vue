<template>
    <!-- Wrapper -->
    <div id="wrapper">

        <!-- Menu -->
        <section id="menu">

            <!-- Search -->
            <section>
                <form class="search" method="get" action="#">
                    <input type="text" name="query" placeholder="Search" />
                </form>
            </section>

            <!-- Links -->
            <section>
                <ul class="links">
                    <li>
                        <a href="#">
                            <h3>Lorem ipsum</h3>
                            <p>Feugiat tempus veroeros dolor</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h3>Dolor sit amet</h3>
                            <p>Sed vitae justo condimentum</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h3>Feugiat veroeros</h3>
                            <p>Phasellus sed ultricies mi congue</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <h3>Etiam sed consequat</h3>
                            <p>Porta lectus amet ultricies</p>
                        </a>
                    </li>
                </ul>
            </section>

            <!-- Actions -->
            <section>
                <ul class="actions stacked">
                    <li><a href="#" class="button large fit">Log In</a></li>
                </ul>
            </section>

        </section>

        <!-- Main -->
        <div id="main">

            <!-- Post -->
            <HomePostEntry v-for="post in postList" :post="post" :key="post.id" />

            <!-- Pagination -->
            <ul class="actions pagination">
                <li><NuxtLink :to="`page/${nextPage.toString()}`" class="button large previous" :class="{ disabled: previousPage <= 0 }">Previous Page</NuxtLink></li>
                <li><NuxtLink :to="`page/${nextPage.toString()}`" class="button large next" :class="{ disabled: currentPage*pageSize >= totalNumberOfPosts }">Next Page</NuxtLink></li>
            </ul>
        </div>  
    </div>
</template>


<script setup>

const route = useRoute();
const currentPage = Number(route.params.page_number || '1')
const nextPage = currentPage + 1
const previousPage = currentPage - 1
const pageSize = 5

const totalNumberOfPosts = await queryContent('/').count();

const postList = await queryContent('/')
        .sort({ published_date: -1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .find();

console.log(postList)


</script>