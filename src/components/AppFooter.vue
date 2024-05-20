<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="col-12 col-md-4">Developed by Serena Dong</div>
            <div class="col-12 col-md-4"></div>
            <div class="col-12 col-md-4 text-end">
                <a href="https://github.com/Serena-Dong/vite-boolflix" target="_blank" rel="noopener noreferrer">Check
                    the repository</a>
            </div>

        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/partials/variables";

footer {
    min-height: 10vh;
    background-color: $b-black;
    color: $b-white;

    display: flex;
    align-items: center;


    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
}
</style>