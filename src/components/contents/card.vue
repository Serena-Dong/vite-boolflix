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
            const placeholder = 'https://www.altavod.com/assets/images/poster-placeholder.png'

            const size = 'w300/';

            if (!this.content.poster_path) return placeholder;

            return api.imgBaseUri + size + this.content.poster_path
        },
        rating() {
            return Math.ceil(this.content.vote_average / 2)
        }
    },
    methods: {
        setStar(n) {
            let starClass = n <= this.rating ? 'fa-solid' : 'fa-regular';

            return starClass + ' fa-star';

        }
    }
}
</script>

<template>
    <ul>
        <div id="poster">
            <li><a href=""><img class="img" :src="imgSrc" :alt="title"></a></li>
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
            <li>Ratings: <i v-for="n in 5" :class="setStar(n)"></i></li>
            <li>{{ this.content.overview }}</li>
        </div>

    </ul>
</template>

<style lang="scss" scoped>
#poster {

    height: 500px;
    position: relative;

}

#poster li a .img {

    &:hover {
        opacity: 0%;
    }
}


.details {
    width: 300px;
    height: 425px;
    background-color: black;
    border: 2px white solid;
    overflow: auto;

    position: absolute;
    top: 10px;

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