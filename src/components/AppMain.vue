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
        <div class="content container">
            <!-- MOVIE SECTION -->
            <h1 v-if="store.movies.length > 0">MOVIES</h1>
            <div class="card-box container">
                <card v-for="movie in store.movies" :key="movie.id" :content="movie"></card>
            </div>

            <!-- TV SERIES SECTION -->
            <h1 v-if="store.movies.length > 0">TV SERIES</h1>
            <div class="card-box container">
                <card v-for="serie in store.series" :key="serie.id" :content="serie"></card>
            </div>
        </div>

        <!-- Text to show when there is nothing yet -->
        <div class="text container">
            <h3>There is nothing...yet!</h3>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: rgb(28, 28, 28);
    min-height: 90vh;
    padding: 1rem;

    .content {
        @media screen and (max-width: 560px) {
            h1 {
                text-align: center;
            }
        }

        h1 {
            padding: 1rem;
        }

        .card-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 2%;
        }
    }

    .text {
        height: 70vh;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

}
</style>