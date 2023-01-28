<script>
export default {
    name: 'card',
    props: {
        content: Object
    },
    computed: {
        title() {
            return this.content.title || this.content.name
        },
        originalTitle() {
            return this.content.original_title || this.content.original_name
        },
        hasFlag() {
            const flags = ['it', 'en']
            return flags.includes(this.content.original_language)
        },
        imgSrc() {
            const url = "../assets/img/" + this.content.original_language + ".png";
            return url
        }
    }
}
</script>

<template>
    <ul>
        <li>{{ title }}</li>
        <li>{{ originalTitle }} </li>
        <li>
            <img v-if="hasFlag" :src="imgSrc">
            <p v-else></p>
        </li>
        <li>{{ content.vote_average }}</li>

    </ul>
</template>

<style>

</style>