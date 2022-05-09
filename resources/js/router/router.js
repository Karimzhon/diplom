import Vue from "vue"
import LangRouter from "vue-lang-router";

import translations from "../lang/translate"
import HomePage from "../components/HomePage/index"
import Welcome from "../components/Welcome/index"

Vue.use(LangRouter, {
    defaultLanguage: 'kz',
    translations,
});

let router = new LangRouter({
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome,
            meta: {
                title: "Qazaq Tili"
            }
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage,
            meta: {
                title: "Qazaq Tili"
            }
        },
    ],
    mode: 'history'
});

const DEFAULT_TITLE = 'Some Default Title';
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router;
