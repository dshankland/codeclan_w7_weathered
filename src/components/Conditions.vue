<template lang="html">
  <div v-if="conditions" id="conditions">
    <h1>{{conditions.city_name}}, {{conditions.country_code}}</h1>
    <h2>Current Conditions</h2>
    <h1>{{conditions.weather.description}}</h1>
    <img v-bind:src="'https://www.weatherbit.io/static/img/icons/' + conditions.weather.icon + '.png'">
    <h2>{{conditions.temp}} &deg;C (feels like {{conditions.app_temp}} &deg;C)</h2>
    <p>sunrise: {{conditions.sunrise}}</p>
    <p>sunset: {{conditions.sunset}}</p>
  </div>
</template>

<script>
export default {
  name: 'current-conditions',
  props: ['conditions'],
  components: {
    
  },
}
</script>

<style lang="css" scoped>
</style>
