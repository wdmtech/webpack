<template>
  <section>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="email" placeholder="Email" v-model="email">
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="password">
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button
          class="button is-primary is-outlined is-pulled-right"
          @click="$emit('authenticate', { strategy: 'local', email, password })">
          Login
        </button>
      </p>
    </div>
    <div>
      <router-link to="signup">Not registered?</router-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'login',
    data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      return {
        email: '',
        password: ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
