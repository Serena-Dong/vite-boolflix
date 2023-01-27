<script>
import axios from 'axios'
import { store } from './data/store'
import { api } from './data/index'

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    data() {
        return {
            store,
            api,
            apiUriMovies: store.apiUri + '/search/movie?api_key=' + store.apiKey + '&query='
        }
    },
    components: { AppHeader, AppMain },
    methods: {
        filterContents(name) {

            const urlMovie = store.apiUriMovies + name;

            axios.get(urlMovie)
                .then(res => {
                    store.movies = res.results
                    console.log(store.movies)
                })
        }
    }
}
</script>

<template>
    <AppHeader @searching-bar="filterContents"></AppHeader>
    <AppMain></AppMain>

</template>

<style scoped>

</style>
