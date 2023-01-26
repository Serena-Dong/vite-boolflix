<script>
import { store } from './data/store'

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    data() {
        return {

        }
    },
    components: { AppHeader, AppMain },
    methods: {
        filterContents(name) {
            console.log(name)
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
