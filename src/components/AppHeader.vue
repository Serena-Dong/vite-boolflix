<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            searchTerm: ''
        }
    },
    emits: ['search-term', 'form-submit']
}
</script>

<template>
    <header>
        <form @submit.prevent="$emit('form-submit')">
            <input v-model.trim="searchTerm" @keyup="$emit('search-term', searchTerm)" type="text" placeholder="Search">
            <button type="submit">Go</button>
        </form>
    </header>
</template>




<style>

</style>
