<script>
import { api } from '../data/index'

export default {
    name: 'card',
    data() {
        return {
            api
        }
    },
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
        },
        imgSrc() {
            const size = 'w342/';
            const url = api.imgBaseUri + size + this.content.poster_path;

            return url
        }
    }
}
</script>

<template>
    <ul>
        <li><img :src="imgSrc" :alt="title"></li>
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