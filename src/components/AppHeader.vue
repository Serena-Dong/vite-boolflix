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
            <div class="logo col-12 col-md-4 ">
                <a href="">
                    <h1>B O O L F L I X</h1>
                </a>
            </div>

            <!-- SEARCH-BAR  -->
            <div class="search-bar col-12 col-md-3">
                <form @submit.prevent="$emit('form-submit')">
                    <input v-model.trim="searchTerm" @keyup="$emit('search-term', searchTerm)" type="text"
                        placeholder="Search">
                    <button type="submit">Go</button>
                </form>
            </div>

        </div>
    </header>
</template>




<style lang="scss" scoped>
header {
    background-color: black;
    min-height: 10vh;
    padding: 1rem;

    display: flex;
    align-items: center;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;


        .logo h1 {
            color: red;
        }

        .search-bar {

            input,
            button {
                color: white;
                background-color: rgb(0, 0, 0);
                border: 2px white solid;
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
            }
        }

    }
}
</style>
