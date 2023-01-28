<script>
import { api } from '../../data/index'

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
            const url = new URL(`../../assets/img/${this.content.original_language}.png`, import.meta.url);
            return url.href
        },
        imgSrc() {
            const size = 'w342/';
            const url = api.imgBaseUri + size + this.content.poster_path;

            return url
        },
        rating() {
            const ratingConverted = ((Math.floor(this.content.vote_average)) * 5) / 10
            return ratingConverted
        }
    }
}
</script>

<template>
    <ul>
        <div class="poster">
            <li><a href=""><img :src="imgSrc" :alt="title"></a></li>
        </div>
        <div class="details">
            <li>
                <h2>{{ title }}</h2>
            </li>
            <li>{{ originalTitle }} </li>
            <li>
                <img v-if="hasFlag" :src="flagSrc" :alt="this.content.original_language">
                <p v-else>{{ this.content.original_language }}</p>
            </li>
            <li>{{ rating }}</li>
            <li>{{ this.content.overview }}</li>
        </div>

    </ul>
</template>

<style lang="scss">
.details {
    display: block;
    width: 340px;
    height: 500px;
    background-color: black;
    border: 2px white solid;

    margin-left: 1rem;
}

.details>*,
h2,
p {
    color: white;
}

.details img {
    width: 15%
}
</style>