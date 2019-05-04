<template lang="html">
  <div id="view">
    <h2> Forecast View </h2>

  </div>
</template>

<script>
import { apiKey } from '../config.js';

export default {
  name: 'forecast-view',
  components: {
    apiKey
  },
  data() {
    return {
      forecastData: null
    };
  },
  methods: {
    fetchForecastData: function (){
      fetch(`https://api.weatherbit.io/v2.0/current?ip=auto&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        this.forecastData = data;
        console.log(data);
      })
    },
  },
  mounted() {
    this.fetchForecastData();
  }
}
</script>

<style lang="css" scoped>
</style>
