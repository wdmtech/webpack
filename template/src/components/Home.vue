<template>
  <div>
    <div class="container">
      <h1 class="title animated fadeInUp">
        <span v-if="isLoggedIn && authProvider !== 'local'">
          \{{ msg }}, \{{ user[authProvider].profile.displayName }}!
        </span>
        <span v-if="isLoggedIn && authProvider === 'local'">
          \{{ msg }}, \{{ user.firstName }}!
        </span>
        <span v-if="!isLoggedIn">Please sign in or <router-link to="signup" class="muted">sign up!</router-link></span>
      </h1>
    </div>
  </div>
</template>

<script>
// import mixins from '@/mixins'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { mapGetters } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  // mixins: [mixins.facebookSDK],
  name: 'home',
  props: {
    user: undefined,
    authProvider: undefined{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  computed: {
    ...mapGetters('users', ['isLoggedIn']){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
