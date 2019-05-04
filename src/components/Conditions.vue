<template lang="html">
  <div v-if="conditions" id="conditions">
    <h1>{{conditions.city_name}}</h1>
    <h2>Current Conditions</h2>
    <h1>{{conditions.weather.description}}</h1>
    <img v-bind:src="'https://www.weatherbit.io/static/img/icons/' + conditions.weather.icon + '.png'">
    <p>sunrise: {{conditions.sunrise}}</p>
    <p>sunset: {{conditions.sunset}}</p>
  </div>
</template>

<script>
export default {
  name: 'current-conditions',
  props: ['conditions']
}
</script>

<style lang="css" scoped>
</style>
