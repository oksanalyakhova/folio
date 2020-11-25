import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';

import routes from './routes';
import './mixins';

import {gsap} from "gsap";

import checkView from 'vue-check-view';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueRouter);
Vue.use(checkView);
Vue.use(VueScrollTo, {
    duration: 800,
});

// gsap global
Object.defineProperty(Vue.prototype, '$gsap', {value: gsap});

const router = new VueRouter({
    routes,
    base: '',
    linkActiveClass: 'active',
    // mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});


