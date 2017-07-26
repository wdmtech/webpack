<template>
  <nav class="navbar">
    <div class="navbar-brand">

      <a class="navbar-item">wdmtech/webpack</a>

      <div class="navbar-burger burger" data-target="navMenuExample">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>

    <div id="navMenuExample" class="navbar-menu">

      <div class="navbar-start">
        <router-link class="navbar-item" to="home">Home</router-link>
      </div>

      <div class="navbar-end">
        <!-- Log in with local or Oauth provider -->
        <div v-if="!user" class="navbar-item has-dropdown is-hoverable is-transparent">
          <div class="navbar-link">
            Log in
          </div>
          <div id="moreDropdown" class="navbar-dropdown is-boxed">
            <a class="navbar-item " href="//localhost:3030/auth/facebook">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <p>
                      <strong>Log in with Facebook</strong>
                      <span class="icon is-small"><i class="fa fa-facebook-official"></i></span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a class="navbar-item " href="//localhost:3030/auth/google">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <p>
                      <strong>Log in with Google</strong>
                      <span class="icon is-small"><i class="fa fa-google"></i></span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a class="navbar-item " href="//localhost:3030/auth/github">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <p>
                      <strong>Log in with Github</strong>
                      <span class="icon is-small"><i class="fa fa-github"></i></span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <router-link class="navbar-item" to="login">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <p>
                      <strong>Log in with username and password</strong>
                      <span class="icon is-small"><i class="fa fa-user"></i></span>
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- name -->
        <a class="navbar-item" v-if="user">
          \{{ user && user[authProvider] ? user[authProvider].profile.displayName : user.email }}
        </a>

        <!-- log out button -->
        <a class="navbar-item" @click="$emit('logout')" v-if="user">
          Log out
        </a>

      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar',
    props: {
      user: undefined,
      authProvider: undefined{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="sass" type="text/sass">
  .navbar-dropdown
    right: 0
    left: initial

</style>
