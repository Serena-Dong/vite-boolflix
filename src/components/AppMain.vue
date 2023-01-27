<script>
import { store } from '../data/store';

export default {
    name: 'AppMain',
    data: () => ({ store })
}
</script>

<template>
    <ul v-for="movie in store.movies">
        <li>{{ movie.original_title }}</li>
        <li>{{ movie.title }} </li>
        <li> {{ movie.original_language }}</li>
        <li>{{ movie.vote_average }}</li>

    </ul>
</template>

<style>

</style>