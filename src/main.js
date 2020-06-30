import Vue from "vue";
import App from "./App.vue";
import "./main.css";
import VueI18n from "vue-i18n";
import sk from "./i18n/sk";
import en from "./i18n/en";
import VueFullPage from 'vue-fullpage.js'


Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(VueFullPage);

const messages = {
  en,
  sk,
};
const i18n = new VueI18n({
  locale: "sk", // set locale
  messages, // set locale messages
});

new Vue({
  render: (h) => h(App),
  i18n,
}).$mount("#app");
