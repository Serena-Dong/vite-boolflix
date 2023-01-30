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
        <div class="container padding-y">
            <!-- MOVIE SECTION -->
            <h1>Movies</h1>
            <div class="card-box container">
                <card v-for="movie in store.movies" :key="movie.id" :content="movie"></card>
            </div>

            <!-- TV SERIES SECTION -->
            <h1>TV Series</h1>
            <div class="card-box container">
                <card v-for="serie in store.series" :key="serie.id" :content="serie"></card>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: rgb(28, 28, 28);
    min-height: 90vh;

}

.padding-y {
    padding: 0 2rem 0;
}

h1 {
    padding: 1rem 0 1rem;
}

.card-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2%;
}
</style>