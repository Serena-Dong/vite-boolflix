<script>
import AppSearch from '../components/AppSearch.vue';


export default {
    name: 'AppMain',
    components: {
        AppSearch
    }
}
</script>

<template>
    <main>
        <div class="container">
            <RouterView />
        </div>
        <AppSearch></AppSearch>

    </main>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/partials/variables";

main {
    background-color: $b-main;
    min-height: 90vh;
    padding: 1rem;
}
</style>