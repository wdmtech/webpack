{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import ElementUI from 'element-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import locale from 'element-ui/lib/locale/lang/en'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { VTooltip } from 'v-tooltip'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#filters}}
import './filters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/filters}}
{{#mixins}}
import './mixins'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/mixins}}
{{#directives}}
import './directives'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/directives}}
{{#feathers}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import './api/feathers-client'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/feathers}}

{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use('tooltip', VTooltip){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ElementUI, { locale }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.auth.user !== undefined) {
      next({
        path: '/',
        query: { redirect: to.fullPath }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    } else {
      next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  } else {
    next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}} // make sure to always call next()!
  }
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/router}}
Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#feathers}}
window.store = store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/feathers}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#feathers}}
  store,
  {{/feathers}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
