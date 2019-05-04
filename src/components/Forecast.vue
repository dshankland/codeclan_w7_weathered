<template lang="html">
  <div class="forecast">
    <h1>Hourly Forecast</h1>
    <div v-for="(hour, index) in forecast" class="hourly-forecast">
      <h3>{{hour.timestamp_local}} {{hour.weather.description}} </h3>
      <img v-bind:src="'https://www.weatherbit.io/static/img/icons/' + hour.weather.icon + '.png'" width=80px>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hourly-forecast',
  props: ['forecast']
}
</script>

<style lang="css" scoped>

.forecast {
  display: inline-block;
  width: 100%;
  text-align: center;
  height: 300px;
  overflow-x: scroll;
  overflow-y: hidden;
}

.hourly-forecast {

  float: left;
  border: 1px solid black;
  width: 120px;
  height: 210px;
}

</style>
