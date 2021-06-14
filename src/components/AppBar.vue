<template>
<div class="appbar green pa-4 d-flex justify-space-between align-center">
    <h1 @click="routeTo('/')" class="white--text brandname">JobHunt</h1>
    <div v-if="!userInfo">
        <v-btn text class="white--text" @click="routeTo('/jobs')">Jobs</v-btn>
        <v-btn text class="white--text" @click="routeTo('/register')">Sign Up</v-btn>
        <v-btn text class="white--text" @click="routeTo('/login')">Login</v-btn>
    </div>
    <div v-else>
        <v-btn text class="white--text" v-if="get(userInfo, 'role') === 'company-user'" @click="routeTo('/company/profile')">Profile</v-btn>
        <v-btn text class="white--text" v-if="get(userInfo, 'role') === 'company-admin'" @click="routeTo('/company/profile')">Profile</v-btn>
        <v-btn text class="white--text" v-if="get(userInfo, 'role') === 'applicant'" @click="routeTo('/applicant/profile')">Profile</v-btn>
        <v-btn text class="white--text" @click="routeTo('/jobs')">Jobs</v-btn>
        <v-btn text class="white--text" v-if="get(userInfo, 'role') === 'company-user' || get(userInfo, 'role') === 'company-admin'" @click="routeTo('/company/post')">Post</v-btn>
        <v-btn text class="white--text" @click="logout">Logout</v-btn>
    </div>
</div>
</template>

<script>
import {get} from 'lodash'
export default {
    data:()=>({
        get
    }),
    computed:{
        userInfo(){
            return this.$store.getters['auth/getUserInfo']
        }
    },
    methods:{
        routeTo(route){
            if(this.$route.path !== route){
                this.$router.push(route)
            }
        },
        logout(){
            this.$store.dispatch('auth/logout')
            this.$router.push('/login')
        }
    },
    
}
</script>

<style scoped>
.brandname:hover{
  cursor: pointer;
}
.appbar{
    position: fixed;
    width: 100%;
    z-index: 2;
}
</style>