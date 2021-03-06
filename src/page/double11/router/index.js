import Vue from 'vue';
import VueRouter from 'vue-router';
import {setTitle} from 'Public/util';

Vue.use(VueRouter);

const realTime = r => require.ensure([], () => r(require('../double11.vue')), 'realTime');

const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'realTime',
        meta: {
            title: '双11大屏'
        },
        component: realTime,
    }, {
        path: '*',
        redirect: '/'
    }],

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
});

router.beforeEach((to, from, next) => {
    setTitle(to.matched[to.matched.length - 1] && to.matched[to.matched.length - 1].meta.title || '');
    next();
});

export default router;
