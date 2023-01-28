<script>
import axios from 'axios'
import { store } from './data/store'
import { api } from './data/index'

import AppHeader from './components/AppHeader.vue';
import card from './components/card.vue';

export default {
    name: 'Boolflix',
    components: { AppHeader, card },
    data() {
        return {
            store,
            api,
            term: ''
        }
    },
    computed: {
        parameters() {
            return {
                params: {
                    language: api.language,
                    api_key: api.key,
                    query: this.term
                }
            }
        }
    },
    methods: {
        updateTerm(searchTerm) {
            this.term = searchTerm
        },
        searchContent() {
            if (!this.term) {
                store.movies = [];
                store.series = [];
            }

            this.fetchApi('search/movie', 'movies');
            this.fetchApi('search/tv', 'series');
        },
        fetchApi(endpoint, collection) {
            axios.get(`${api.baseUri}/${endpoint}`, this.parameters)
                .then(res => {
                    store[collection] = res.data.results
                })
        }
    }
}
</script>

<template>
    <AppHeader @searching-bar="updateTerm" @form-submit="searchContent"></AppHeader>



    <main>

        <!-- MOVIE SECTION -->
        <h1>Movies</h1>
        <card v-for="movie in store.movies" :key="movie.id" :content="movie"></card>

        <!-- TV SERIES SECTION -->
        <h1>TV Series</h1>
        <card v-for="serie in store.series" :key="serie.id" :content="serie"></card>

    </main>

</template>

<style scoped>

</style>
