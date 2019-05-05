<template lang="html">
  <div id="view">
    <Header text="Weathered"/>
    <router-view id="view" />
  </div>

</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather+Sans');
#view {
  font-family: 'Merriweather Sans', sans-serif;
}
</style>
