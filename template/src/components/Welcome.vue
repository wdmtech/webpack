<template>
  <div>
    <div class="container">
      <h1 class="title animated fadeInUp">
        \{{ msg }}, \{{ user && user[authProvider] ? user[authProvider].profile.displayName : '' }}!
      </h1>
    </div>
  </div>
</template>

<script>
// import mixins from '@/mixins'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  // mixins: [mixins.facebookSDK],
  name: 'home',
  props: {
    user: undefined,
    authProvider: undefined{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  mounted{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
