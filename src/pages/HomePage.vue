<script>
import axios from 'axios';
import { store } from '../data/store.js';
import Jumbotron from '../components/contents/Jumbotron.vue';
import Carousel from '../components/contents/Carousel.vue';

export default {
  name: 'HomePage',
  components: { Jumbotron, Carousel },
  data: () => ({
    store,
  })
}
</script>
<template>
  <h1>Homepage</h1>
  <Jumbotron></Jumbotron>
  <Carousel></Carousel>

</template>
<style></style>