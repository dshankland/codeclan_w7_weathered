<template lang="html">
  <div id="search">
    <h2>Search</h2>
    <input type="search" v-model="searchString" placeholder="enter city...">
    <button  v-on:click="searchForecastData(searchString)" type="button" name="search-button">Search</button>
    <div id="search-results">
      <Conditions v-if="searchForecast" :conditions="searchForecast.data[0]" />
    </div>
  </div>
</template>

<script>
import { apiKey } from '../config.js';
import Conditions from '@/components/Conditions.vue';

export default {
  name: 'forecast-search',
  components: {
    apiKey,
    Conditions
  },
  data() {
    return {
      searchString: null,
      searchForecast: null
    };
  },
  methods: {
    searchForecastData: function (){
      if (this.searchString) {
      fetch(`https://api.weatherbit.io/v2.0/current?city=${this.searchString}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        this.searchForecast = data;
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
