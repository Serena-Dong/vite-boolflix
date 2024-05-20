import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import TvShowsPage from '../pages/TvShowsPage.vue';
import MoviesPage from '../pages/MoviesPage.vue';
import NPPage from '../pages/NPPage.vue';
import MyListPage from '../pages/MyListPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import PageNotFound from '../pages/PageNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contact', name: 'contact', component: ContactPage },
        { path: '/:pathMatch(.*)*', component: PageNotFound },
        { path: '/tv-shows', name: 'tv-shows', component: TvShowsPage },
        { path: '/movies', name: 'movies', component: MoviesPage },
        { path: '/new-and-popular', name: 'new-and-popular', component: NPPage },
        { path: '/my-list', name: 'my-list', component: MyListPage },

    ]
})

export { router };