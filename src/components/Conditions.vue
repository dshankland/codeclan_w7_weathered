<template lang="html">
  <div v-if="conditions" id="conditions">
    <h1>{{conditions.city_name}}, {{conditions.country_code}}</h1>
    <h3>Current Conditions</h3>
    <h2>{{conditions.weather.description}}</h2>
    <img v-bind:src="'https://www.weatherbit.io/static/img/icons/' + conditions.weather.icon + '.png'">
    <h2>{{conditions.temp}} &deg;C (feels like {{conditions.app_temp}} &deg;C)</h2>
    <p>Sunrise: {{conditions.sunrise}}, Sunset: {{conditions.sunset}}</p>
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
