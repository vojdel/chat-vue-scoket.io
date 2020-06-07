import Vue from 'vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import App from './App.vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
