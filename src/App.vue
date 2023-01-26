<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import store from './data/data'

export default {
    data() {
        return {
            store
        }
    },
    components: { AppHeader, AppMain }
}
</script>

<template>
    <AppHeader></AppHeader>
    <AppMain></AppMain>

</template>

<style scoped>

</style>
