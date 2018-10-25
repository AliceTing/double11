import Vue from 'vue';
import Vuex from 'vuex';

import double11Module from './double11Module';

Vue.use(Vuex);

const vueInstance = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  actions: {},
  mutations: {},
  modules: {
      double11Module
  }
});

export default vueInstance;

