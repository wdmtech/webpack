import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.filter('capitalize', (value) => {
  if (value && value.length) {
    return value[0].toUpperCase() + value.slice(1){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  return value{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
