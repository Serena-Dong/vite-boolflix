<script>
import { store } from '../data/store';
import card from './contents/card.vue';
import Carousel from './contents/Carousel.vue';


export default {
    name: 'AppSearch',
    components: { card, Carousel },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section v-if="store.movies.length > 0" class="content container">
        <h1 class="text-center">SEARCH</h1>
        <!-- MOVIE SECTION -->
        <h1 v-if="store.movies.length > 0">MOVIES</h1>
        <div class="card-box container">
            <card v-for="movie in store.movies" :key="movie.id" :content="movie"></card>
        </div>

        <!-- TV SERIES SECTION -->
        <h1 v-if="store.series.length > 0">TV SERIES</h1>
        <div class="card-box container">
            <card v-for="serie in store.series" :key="serie.id" :content="serie"></card>
        </div>

        <!-- Text to show when there is nothing yet -->
        <!-- <div v-if="store.movies.length == 0" class="text container">
            <h3>There is nothing...yet!</h3>
        </div> -->
    </section>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/partials/variables";


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
</style>