<template>
  <v-app>
    
    <app-bar></app-bar>
    <div style="margin-bottom: 80px;"></div>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'

export default {
  name: 'App',

  components: {
    'app-bar': AppBar
  },

  data: () => ({
    //
    
  }),
  
};
</script>

<style scoped>

</style>
