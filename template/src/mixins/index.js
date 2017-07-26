/* eslint-disable wrap-iife,no-undef,one-var,no-unexpected-multiline,quotes,no-shadow,arrow-parens,func-names,one-var-declaration-per-line,prefer-const,max-len */
export default {
  // Your mixins
  facebookSDK: {
    methods: {
      facebookLogin{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
        FB.getLoginStatus((response) => {
          if (response.status === 'connected') {
            // Person was already logged in
            this.authResponse = response.authResponse{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            FB.api(`/1074628192608743/feed`, { access_token: response.authResponse.accessToken }, response => {
              response.data.forEach(post => {
                FB.api(`/${post.id}?fields=message,picture,permalink_url`, { image: true }, response => {
                  this.posts.push(response){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
                }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
              }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          } else {
            FB.login((response) => {
              // Person is now logged in
              this.authResponse = response.authResponse{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
              FB.api(`/1074628192608743/feed`, { access_token: response.authResponse.accessToken }, response => {
                response.data.forEach(post => {
                  FB.api(`/${post.id}?fields=message,picture,permalink_url`, { image: true }, response => {
                    this.posts.push(response){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
                  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
                }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
              }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          }
        }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      },
      facebookLogout{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
        this.$nextTick(() => {
          FB.logout(() => {
            this.authResponse = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      },
      facebookInit{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
        return new Promise((resolve) => {
          this.$nextTick(() => {
            window.fbAsyncInit = function () {
              FB.init({
                appId: '808497475987002',
                status: true,
                xfbml: true,
                version: 'v2.10'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
              }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
              FB.AppEvents.logPageView(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
              resolve(FB){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            };
            (function (d, s, id) {
              let js, fjs = d.getElementsByTagName(s)[0]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
              if (d.getElementById(id)) { return{{#if_eq lintConfig "airbnb"}};{{/if_eq}} }
              js = d.createElement(s); js.id = id{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
              js.src = '//connect.facebook.net/en_US/sdk.js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
              fjs.parentNode.insertBefore(js, fjs){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            }(document, 'script', 'facebook-jssdk')){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      return {
        FB: {},
        authResponse: {},
        posts: []{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    mounted{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      this.facebookInit().then(FB => {
        this.FB = FB{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}

}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
