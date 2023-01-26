<script>
import { store } from './data/store'

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    data() {
        return {
            store,
            urlMovies: store.apiUri + '/search/movie?api_key=' + store.apiKey + '&query='
        }
    },
    components: { AppHeader, AppMain },
    methods: {
        filterContents(name) {
            console.log(this.urlMovies)
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
