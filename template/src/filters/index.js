import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  if (value && value.length) {
    return value[0].toUpperCase() + value.slice(1)
  }
})
