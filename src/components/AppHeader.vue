<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            searchTerm: ''
        }
    },
    emits: ['searching-bar']
}
</script>

<template>
    <input v-model.trim="searchTerm" @keyup.enter="$emit('searching-bar', searchTerm)" type="text">
    <button type="submit">search</button>
</template>




<style>

</style>
