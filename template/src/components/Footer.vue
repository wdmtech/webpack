<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <router-link to="contact">Contact</router-link>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
