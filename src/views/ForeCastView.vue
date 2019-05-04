<template lang="html">
  <div id="view">
    <Conditions v-if="currentConditions" :conditions="currentConditions.data[0]" />


  </div>
</template>

<script>
import { apiKey } from '../config.js';
import Conditions from '@/components/Conditions.vue';
import Forecast from '@/components/Forecast.vue';
import ForecastSearch from '@/components/ForecastSearch.vue';

export default {
  name: 'forecast-view',
  components: {
    apiKey,
    Conditions,
    Forecast,
    ForecastSearch
  },
  data() {
    return {
      currentConditions: null,
      hourlyForecast: null
    };
  },
  methods: {
    fetchForecastData: function (){
      fetch(`https://api.weatherbit.io/v2.0/current?ip=auto&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        this.currentConditions = data;
        fetch(`https://api.weatherbit.io/v2.0/forecast/hourly/?lat=${this.currentConditions.data[0].lat}&lon=${this.currentConditions.data[0].lon}&key=${apiKey}`)
        .then(response => response.json())
        .then(data =>{
          this.hourlyForecast = data;
        });
      });
    },
  },
  mounted() {
    this.fetchForecastData();
  }
}
</script>

<style lang="css" scoped>
</style>
