<template>
  <v-container>
      <v-row >
          <v-col cols="3">
              <v-card width="100%" height="700" class="d-flex flex-column">
                <div style="height: 40%;" class="pa-4">
                    <div class="text-center mb-4">
                        <v-avatar
                            color="grey"
                            size="100"
                        ></v-avatar>
                    </div>
                    <h3 class="text-center">Applicant Name</h3>
                </div>
                <div 
                    v-for="(tab, i) in navItem" :key="i" 
                    class="nav-btn" 
                    @click="routeTo('/applicant/profile', tab.path)" 
                    :class="{ 'active-tab': get(activeTab, tab.value) }"
                >
                    <span>{{ tab.name }}</span>
                </div>
                <div class="nav-btn">
                    <span>Download Resume</span>
                </div>
              </v-card>
          </v-col>
          <v-col cols="9">
              <router-view></router-view>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import {get} from 'lodash'
export default {
    data:()=>({
        get,
        navItem: [
            { name: 'Summary', path: '', value: 'summary' },
            { name: 'Personal Info', path: '/personal-info', value: 'personalInfo' },
            { name: 'Experience', path: '/experience', value: 'experience' },
            { name: 'Skills', path: '/skills', value: 'skills' },
            { name: 'Education', path: '/education', value: 'education' }
        ]
    }),
    mounted(){
        let currentRoute = this.$route.path.substring(18)
        this.setActiveTab(currentRoute)
    },
    computed:{
        activeTab(){
            return this.$store.getters['applicantProfile/getActiveTab']
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
            this.$store.dispatch('applicantProfile/setActiveTab',{
                summary: tab === '' ? true:false,
                personalInfo: tab === '/personal-info' ? true:false,
                experience: tab === '/experience' ? true:false,
                skills: tab === '/skills' ? true:false,
                education: tab === '/education' ? true:false
            })
        }
    }
}
</script>

<style scoped>
.nav-btn{
    height: 10%;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-btn:hover{
    cursor: pointer;
    background:#eee;
}
.active-tab{
    background: #4CAF50 !important;
    color: white;
    font-weight: 700;
}
</style>