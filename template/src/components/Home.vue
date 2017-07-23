<template>
  <div>
    <div class="container">
      <section class="section">
        <h1 class="title">\{{ msg }}, \{{ user[authProvider].profile.displayName }}</h1>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    user: undefined,
    authProvider: undefined{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
