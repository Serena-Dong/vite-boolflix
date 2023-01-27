<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            searchTerm: ''
        }
    },
    emits: ['searching-bar', 'form-submit']
}
</script>

<template>
    <form @submit.prevent="$emit('form-submit')">
        <input v-model.trim="searchTerm" @keyup="$emit('searching-bar', searchTerm)" type="text" placeholder="Search">
        <button type="submit">Go</button>
    </form>
</template>




<style>

</style>
