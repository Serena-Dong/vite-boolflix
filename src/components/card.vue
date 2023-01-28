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
        flagSrc() {
            const url = new URL(`../assets/img/${this.content.original_language}.png`, import.meta.url);
            return url.href
        }
    }
}
</script>

<template>
    <ul>
        <li>{{ title }}</li>
        <li>{{ originalTitle }} </li>
        <li>
            <img v-if="hasFlag" :src="flagSrc" :alt="this.content.original_language">
            <p v-else>{{ this.content.original_language }}</p>
        </li>
        <li>{{ content.vote_average }}</li>

    </ul>
</template>

<style>

</style>