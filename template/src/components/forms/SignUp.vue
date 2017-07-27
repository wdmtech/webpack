<template>
  <section>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" :class="{ 'is-success': !$v.email.$invalid, 'is-error': $v.email.$invalid }" type="email" placeholder="Email" v-model="email" @keyup.enter="register">
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" :class="{ 'is-success': !$v.password.$invalid, 'is-error': $v.password.$invalid }" type="password" placeholder="Password" v-model="password" @keyup.enter="register">
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" :class="{ 'is-success': $v.repeatPassword.sameAsPassword && !$v.repeatPassword.$invalid }" type="password" placeholder="Confirm password" v-model="repeatPassword" @keyup.enter="register">
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button
          class="button is-primary is-outlined is-pulled-right"
          @click="register"
          :disabled="$v.$invalid">
          Register
        </button>
      </p>
    </div>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'signup',
  mixins: [validationMixin],
  methods: {
    register{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      const fields = {
        email: this.email,
        password: this.password{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.$emit('register', fields){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      email: '',
      password: '',
      repeatPassword: ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  validations: {
    email: {
      email,
      required{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    password: {
      required,
      minLength: minLength(6){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password'){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
