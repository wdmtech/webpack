<template>
  <div id="app">
    <navbar :user="user" :authProvider="authProvider" @logout="logout"></navbar>
    {{#router}}
    <router-view :user="user" :authProvider="authProvider" ></router-view>
    {{else}}
    <home></home>
    {{/router}}
    <footer-component></footer-component>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import FooterComponent from '@/components/Footer'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#unless router}}
import Home from '@/components/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
import { mapState, mapActions } from 'vuex'
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    Home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    Navbar,
    FooterComponent
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}},
  components: {
    Navbar,
    FooterComponent
  },
  computed: {
    ...mapState('auth', ['user']),
    authProvider () {
      if (this.user && this.user.facebook) return 'facebook'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      if (this.user && this.user.google) return 'google'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      if (this.user && this.user.github) return 'github'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  },
  methods: {
    ...mapActions('auth', ['authenticate', 'logout'])
  },
  mounted () {
    this.authenticate()
      .then(result => {
        console.log('authed!'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        console.log(result){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        return result
      })
      .catch(error => console.log(error))
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="sass" type="text/sass">
  @import "~bulma"
  @import "~font-awesome/css/font-awesome.css"

  nav a.navbar-item.is-active, .navbar-link.is-active
    color: $primary
</style>
