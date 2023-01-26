<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            searchTerm: ''
        }
    }
}
</script>

<template>
    <form action="">
        <input v-model="searchTerm" type="text">
        <button>search</button>
    </form>
</template>




<style>

</style>
