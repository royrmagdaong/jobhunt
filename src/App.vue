<template>
  <v-app>
    
    <app-bar></app-bar>
    <div style="margin-bottom: 80px;"></div>

    <!-- snackbar -->
    <app-snackbar></app-snackbar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
import Snackbar from './components/Snackbar.vue'

export default {
  name: 'App',

  components: {
    'app-bar': AppBar,
    'app-snackbar': Snackbar
  },

  data: () => ({
    //
  }),
  
};
</script>

<style scoped>

</style>
