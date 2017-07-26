<template>
  <section class="is-small">
    <h1 class="title">Contact</h1>
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="name" id="email-name" type="text" placeholder="Name" class="input">
        <span class="icon is-small is-left"><i class="fa fa-user primary"></i></span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="email" id="email-address" type="email" placeholder="Email address" class="input">
        <span class="icon is-small is-left"><i class="fa fa-envelope primary"></i></span>
      </p>
    </div>
    <div class="field"><p class="control"></p>
      <div class="select is-fullwidth">
        <select id="email-enquiry">
          <option>Free estimate and site survey</option>
          <option>General enquiry</option>
          <option>Building services enquiry</option>
          <option>Agricultural groundwork enquiry</option>
          <option>Equestrian groundwork enquiry</option>
        </select>
      </div>
      <p></p></div>
    <div class="field">
      <p class="control">
        <textarea id="email-content" placeholder="How can we help you?" class="textarea"></textarea>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button id="send-email" class="button is-pulled-right is-primary is-outlined">
          <div class="icon is-small">
            <div class="fa fa-envelope-o"></div>
          </div>
          <span>Send!</span>
        </button>
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'contact'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
