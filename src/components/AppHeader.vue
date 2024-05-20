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
            <div class="navbar col-12 col-md-9">
                <div class="logo">
                    <a href="/">
                        <h1>B O O L F L I X</h1>
                    </a>
                </div>
                <ul class="d-flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="tv-shows">TV Shows</a></li>
                    <li><a href="movies">Movies</a></li>
                    <li><a href="new-and-popular">New & Popular</a></li>
                    <li><a href="my-list">My list</a></li>
                    <li><a href="">Languages</a></li>
                </ul>
            </div>


            <!-- SEARCH-BAR  -->
            <div class="search-bar col-12 col-md-3">
                <form @submit.prevent="$emit('form-submit')">
                    <input v-model.trim="searchTerm" @keyup="$emit('search-term', searchTerm)" type="text"
                        placeholder="Search">
                    <button type="submit">Search</button>
                </form>
            </div>

        </div>
    </header>
</template>




<style lang="scss" scoped>
@import "./../assets/scss/partials/variables";

header {
    background-color: $b-black;
    min-height: 10vh;
    padding: 1rem;

    display: flex;
    align-items: center;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;


        .navbar {
            display: flex;
            justify-content: flex-start;

            .logo h1 {
                color: $b-red;
                margin-bottom: 0;
            }
        }

        .search-bar {

            input,
            button {
                color: white;
                background-color: $b-black;
                border: 2px $b-white solid;
                border-radius: 0.5rem;

            }

            input {
                width: 75%;
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
        }

        @media screen and (max-width: 560px) {
            flex-direction: column;
            justify-content: center;

            .logo h1,
            .search-bar {
                text-align: center;
                margin-bottom: 1rem;
            }
        }

    }
}
</style>
