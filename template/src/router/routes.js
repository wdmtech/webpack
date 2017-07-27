import Home from '@/components/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import SignUp from '@/components/forms/SignUp'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Contact from '@/components/Contact'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Welcome from '@/components/Welcome'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Login from '@/components/Login'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Profile from '@/components/Profile'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default [
  {
    path: '/',
    name: 'home',
    component: Home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome,
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
    path: '/profile',
    name: 'profile',
    component: Profile{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    path: '/login',
    name: 'login',
    component: Login{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    path: '*',
    redirect: '/'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
