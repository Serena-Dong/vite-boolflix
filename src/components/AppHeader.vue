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
        <div class="container">

            <!-- LOGO -->
            <div class="logo">
                <a href="">
                    <h1>B O O L F L I X</h1>
                </a>
            </div>

            <!-- SEARCH-BAR  -->
            <form @submit.prevent="$emit('form-submit')">
                <input v-model.trim="searchTerm" @keyup="$emit('search-term', searchTerm)" type="text"
                    placeholder="Search">
                <button type="submit">Go</button>
            </form>

        </div>
    </header>
</template>




<style scoped>
header {
    background-color: black;
}

h1 {
    color: red;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;

    padding: 0 2rem 0;

}

input,
button {
    color: white;
    background-color: rgb(0, 0, 0);
    border: 2px white solid;
    border-radius: 0.5rem;

}

input {
    width: 10rem;
    height: 2rem;

    padding: 0.5rem;
    margin-right: 0.3rem;

}

button {
    width: 3rem;
    height: 2rem;
    cursor: pointer;
}

button:hover {
    background-color: rgb(67, 67, 67);
}
</style>
