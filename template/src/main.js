{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/router}}
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
