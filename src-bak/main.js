import { createApp } from 'vue';

// import Cookies from 'js-cookie';

import 'normalize.css/normalize.css';

// import Element from 'element-plus';
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
import store from './store';
const app = createApp(App);
app.use(router);
app.use(store);
const initApp = () => {
// Data Dictionary
  const dict = require('./components/Dict');

  const store = require('./store').default;
  const permission = require('./components/Permission').default;
  require('./router/index'); // permission control
  require('./assets/icons'); // permission control
// filters
  require('./modules/engine/filters/index');
  // const i18n = require('./lang'); // Internationalization
  app.use(VueHighlightJS);
  app.use(mavonEditor);
  app.use(permission);
  app.use(dict);
  // app.use(i18n);
};
app.mount('#app');
process.nextTick(initApp);
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
