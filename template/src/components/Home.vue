<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <section class="section">
        <h1 class="title">\{{ msg }}</h1>
      </section>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import FooterComponent from '@/components/Footer'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
export default {
  name: 'home',
  components: { Navbar, FooterComponent },
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome!'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
