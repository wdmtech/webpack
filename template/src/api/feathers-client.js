import feathers from 'feathers'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import hooks from 'feathers-hooks'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import socketio from 'feathers-socketio'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import auth from 'feathers-authentication-client'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import io from 'socket.io-client'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import feathersVuex from 'feathers-vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from '@/store/'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import rx from 'feathers-reactive'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import RxJS from 'rxjs'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

window.feathers = feathers{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const socket = io('http://localhost:3030', { transports: ['websocket'] }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const feathersClient = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({ cookie: 'feathers-jwt' }))
  .configure(rx(RxJS, { idField: '_id' }))
  // Register feathers-vuex by passing the store and options
  .configure(feathersVuex(store, {
    idField: '_id',
    auth: {
      userService: '/users',
      getters: {
        provider: 'wtf'
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }
  })){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// For every service created, a Vuex store module may be created.
feathersClient.service('/users'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default feathersClient{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
