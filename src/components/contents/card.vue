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
    <div id="poster" class="col-12">
        <img class="poster-img" :src="imgSrc" :alt="title">

        <div id="card" class="col-12">
            <div class="content-container">
                <h2>{{ title }}</h2>
                <h6><i>{{ originalTitle }}</i></h6>
                <div class="flag-container">
                    <img v-if="hasFlag" :src="flagSrc" :alt="this.content.original_language">
                    <p v-else>{{ this.content.original_language }}</p>
                </div>
                <p>Ratings: <i v-for="n in 5" :class="setStar(n)"></i></p>
                <p>{{ this.content.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#poster {
    height: 500px;
    width: 30%;
    position: relative;
    cursor: pointer;

    margin-bottom: 4rem;

    @media screen and (max-width: 560px) {
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

}

#card {
    height: 100%;
    width: 100%;
    overflow: auto;

    color: #FFFFFF;
    border: 3px solid #FFFFFF;

    position: absolute;
    top: 0;

    visibility: hidden;

    &>* {
        margin-bottom: 1rem;
    }

    .content-container {
        padding: 1rem;

        &>* {
            margin-bottom: 0.5rem;
        }

        .flag-container {
            width: 30px;
        }
    }
}

#poster:hover {
    .poster-img {
        filter: blur(5px);
        transition: filter 0.1s ease-in-out;
    }

    #card {
        visibility: visible;
        background-color: rgba(61, 61, 61, 0.775);
        transition: visibility 5s ease-in-out;

    }

}
</style>