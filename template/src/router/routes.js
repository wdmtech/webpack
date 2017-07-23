import Home from '@/components/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    redirect: '/'
  }
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
