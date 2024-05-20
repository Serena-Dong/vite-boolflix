<script>
export default {
    name: 'PageNotFound'
}
</script>
<template>
    <div class="text">
        <h1>404 | Page Not Found</h1>
        <button @click="$router.back" class="btn btn-success mt-5">go back</button>
    </div>
</template>
<style lang="scss" scoped>
.text {

    text-align: center;
    padding-top: 5rem;
}
</style>