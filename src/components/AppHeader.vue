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
    <form action="">
        <input v-model.trim="searchTerm" @keyup.enter="$emit('searching-bar')" type="text">
        <button type="submit">search</button>
    </form>
</template>




<style>

</style>
