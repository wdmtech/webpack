import Home from '@/components/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import SignUp from '@/components/forms/SignUp'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default [
  {
    path: '/login',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    path: '*',
    redirect: '/login'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
