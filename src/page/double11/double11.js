import Vue from 'vue';
import mixin from 'Public/util/mixin';
import store from './store';
import router from './router';
import App from './App.vue';
import 'Public/assets/scss/common.scss';
import Toast from 'Public/components/toast/';
import Loading from 'Public/components/loading/';

Vue.$toast = Vue.prototype.$toast = Toast;
Vue.$loading = Vue.prototype.$loading = Loading;

import * as filters from 'Public/filter';
//注册过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

Vue.mixin(mixin);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#root');



