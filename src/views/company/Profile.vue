<template>
  <v-container>
      <v-card tile width="100%" height="220" elevation="1" class="grey lighten-2">
        <v-img class="prof-pic" height="160" width="160" src=""/>
      </v-card>
      <v-card tile width="100%" height="60" elevation="1" style="border: 1px solid #eee;" class="d-flex justify-end">
        <div class="nav-item" @click="routeTo('/company/profile', '')" :class="{'active-tab': activeTab.summary}">
          <span>Summary</span>
        </div>
        <div class="nav-item" @click="routeTo('/company/profile', '/jobs')" :class="{'active-tab': activeTab.jobs}">
          <span>Jobs</span>
        </div>
        <div class="nav-item" @click="routeTo('/company/profile', '/users')" :class="{'active-tab': activeTab.users}">
          <span>Users</span>
        </div>
      </v-card>
      <v-card tile width="100%" elevation="1">
        <router-view></router-view>
      </v-card>
  </v-container>
</template>

<script>
export default {
  mounted(){
    let currentRoute = this.$route.path.substring(16)
    this.setActiveTab(currentRoute)
  },
  computed:{
    activeTab(){
      return this.$store.getters['companyProfile/getActiveTab']
    }
  },
  methods:{
    routeTo(route, tab){
      if(this.$route.path !== route+tab){
          this.setActiveTab(tab)
          this.$router.push(route+tab)
      }
    },
    setActiveTab(tab){
      this.$store.dispatch('companyProfile/setActiveTab',{
          summary: tab === '' ? true:false,
          jobs: tab === '/jobs' ? true:false,
          users: tab === '/users' ? true:false
      })
    }
  }
}
</script>

<style scoped>
.nav-item{
  flex-basis: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-item:hover{
  cursor: pointer;
  background: #eee;
}
.prof-pic{
  background: grey;
  position: relative;
  top: 90px;
  left: 45px;
  z-index: 1;
}
.active-tab{
  background: #4CAF50 !important;
  font-weight: 700;
  color: white;
}
</style>