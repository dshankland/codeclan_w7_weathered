<template lang="html">
  <div id="search">
    <h2>Search for a city</h2>
    <input type="search" v-model="searchString" placeholder="enter city...">
    <button  v-on:click="searchForecastData(searchString)" type="button" name="search-button">Search</button>
    <div id="search-results">
      <Conditions v-if="searchForecast" :conditions="searchForecast.data[0]" />
      <Forecast v-if="searchHourlyForecast" :forecast="searchHourlyForecast.data" />
    </div>
  </div>
</template>

<script>
import { apiKey } from '../config.js';
import Conditions from '@/components/Conditions.vue';
import Forecast from '@/components/Forecast.vue';

export default {
  name: 'forecast-search',
  components: {
    apiKey,
    Conditions,
    Forecast
  },
  data() {
    return {
      searchString: null,
      searchForecast: null,
      searchHourlyForecast: null
    };
  },
  methods: {
    searchForecastData: function (){
      if (this.searchString) {
      fetch(`https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/current?city=${this.searchString}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        this.searchForecast = data;
        fetch(`https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/forecast/hourly/?lat=${this.searchForecast.data[0].lat}&lon=${this.searchForecast.data[0].lon}&key=${apiKey}`, {headers: {'Content-Type': 'application/json'}})
        .then(response => response.json())
        .then(data =>{
          this.searchHourlyForecast = data;
        });
      });
    };
    },

  },
  mounted() {
  }
}
</script>

<style lang="css" scoped>
</style>
