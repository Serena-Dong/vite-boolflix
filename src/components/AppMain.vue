<script>
import { store } from '../data/store';
import card from '../components/contents/card.vue';


export default {
    name: 'AppMain',
    components: { card },
    data() {
        return {
            store,
            searchTerm: ''
        }
    },
    emits: ['searching-bar', 'form-submit']
}
</script>

<template>
    <main>
        <div class="container">
            <!-- MOVIE SECTION -->
            <h1>Movies</h1>
            <card v-for="movie in store.movies" :key="movie.id" :content="movie"></card>

            <!-- TV SERIES SECTION -->
            <h1>TV Series</h1>
            <card v-for="serie in store.series" :key="serie.id" :content="serie"></card>

        </div>
    </main>
</template>

<style scoped>
main {
    background-color: rgb(28, 28, 28);
}
</style>