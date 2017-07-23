<template>
  <div id="app">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <home></home>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Home from '@/components/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
import { mapState, mapActions } from 'vuex'
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    Home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}},
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['authenticate', 'logout'])
  },
  mounted () {
    this.authenticate({ strategy: 'facebook' })
      .then(result => {
        console.log('authed!'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
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
