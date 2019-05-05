<template lang="html">
  <div class="hourly-condition">
    <h4>{{hour.timestamp_local.slice(11).slice(0,5)}}</h4>
    <h4><br>{{hour.weather.description}}</h4>
    <img v-bind:src="'https://www.weatherbit.io/static/img/icons/' + hour.weather.icon + '.png'" width=80px>
    <p>{{hour.temp}} &deg;C</p>
  </div>

</template>

<script>
export default {
  name: 'hourly-condition',
  props: ['hour']
}
</script>

<style lang="css" scoped>

.hourly-condition h4 {
  white-space: normal;
  padding: 0;
  margin: 5px 0;
}

</style>
