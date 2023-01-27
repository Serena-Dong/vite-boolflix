<script>
import axios from 'axios'
import { store } from './data/store'
import { api } from './data/index'

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: 'Boolflix',
    components: { AppHeader, AppMain },
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
        searchMovies() {
            if (!this.term) {
                store.movies = []
            }
            axios.get(`${api.baseUri}/search/movie`, this.parameters)
                .then(res => {
                    store.movies = res.data.results
                })
        }
    }
}
</script>

<template>
    <AppHeader @searching-bar="updateTerm" @form-submit="searchMovies"></AppHeader>
    <AppMain>
    </AppMain>

</template>

<style scoped>

</style>
