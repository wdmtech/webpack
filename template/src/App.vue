<template>
  <div id="app">
    <navbar :user="user" :authProvider="authProvider" @logout="logout"></navbar>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          {{#router}}
          <router-view :user="user" :authProvider="authProvider" @authenticate="login"></router-view>
          {{else}}
          <home></home>
          {{/router}}
        </div>
      </div>
    </section>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import FooterComponent from '@/components/Footer'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#unless router}}
import Home from '@/components/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
import { mapState, mapActions } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    Home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    Navbar,
    FooterComponent
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
  components: {
    Navbar,
    FooterComponent{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  computed: {
    ...mapState('auth', ['user']),
    authProvider{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      if (this.user && this.user.facebook) return 'facebook'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      if (this.user && this.user.google) return 'google'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      if (this.user && this.user.github) return 'github'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

      return 'local'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  methods: {
    login{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(options = {}) {
      this.authenticate(options)
        .then(() => {
          this.$router.push('home'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        })
        .catch(error => error){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    ...mapActions('auth', ['authenticate', 'logout']){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  mounted{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    this.login({}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="sass" type="text/sass">
  $primary: #da00ab
  @import "~bulma"
  @import "~font-awesome/css/font-awesome.css"
  @import "~animate.css/animate.css"
  @import "~element-ui/lib/theme-default/index.css"

  nav a.navbar-item.is-active, .navbar-link.is-active
    color: $primary
</style>
