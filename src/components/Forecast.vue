<template lang="html">
  <div class="forecast">
    <h2>Hourly Forecast</h2>
    <div v-for="(hour, index) in forecast" class="hourly-forecast">
      <HourlyCondition v-if="hour" :hour="hour" />
      <!-- <h4>{{hour.timestamp_local.slice(11).slice(0,5)}}</h4>
      <h4><br>{{hour.weather.description}}</h4>
      <img v-bind:src="'https://www.weatherbit.io/static/img/icons/' + hour.weather.icon + '.png'" width=80px>
      <p>{{hour.temp}} &deg;C ({{hour.app_temp}} &deg;C)</p> -->
    </div>
  </div>
</template>

<script>
import HourlyCondition from '@/components/HourlyCondition.vue';

export default {
  name: 'hourly-forecast',
  props: ['forecast'],
  components: {
    HourlyCondition
  },

}
</script>

<style lang="css" scoped>

.forecast {
  width: 100%;
  text-align: center;
  height: 300px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.hourly-forecast {
  display: inline-block;
  border: 1px solid black;
  width: 100px;
  height: 220px;
  vertical-align: middle;
}

</style>
