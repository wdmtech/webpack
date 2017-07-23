import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Home from '@/components/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = new Constructor().$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(vm.$el.querySelector('h1.title').textContent)
      .to.equal('Welcome!'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
