import { createApp } from 'vue';

// import Cookies from 'js-cookie';

import 'normalize.css/normalize.css';

import 'element-plus/dist/index.css';
//
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
// Permission instruction

import './assets/styles/element-variables.scss';

// global css
import './assets/styles/index.scss';

// Code highlight
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-dark.css';
import App from './App';
import 'echarts-gl';

// custom css
import './assets/styles/custom.scss';
import router from './router/routers';
import ElementPlus from 'element-plus';
import store from './store';
import './router/index';
import './assets/icons';
import './modules/engine/filters/index';
import dict from './components/Dict';
import permission from './components/Permission';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.use(VueHighlightJS);
app.use(mavonEditor);
app.use(permission);
app.use(dict);
app.mount('#app');
/*
Vue.use(Element, {
  size: localStorage.getItem('size') || 'small', // set element-plus default size
  i18n: (key, value) => i18n.t(key, value)
});*/
app.set = (obj, pro, value) => {
  obj[pro] = value;
};
const Vue = app;
export { app, Vue };
