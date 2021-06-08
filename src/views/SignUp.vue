<template>
  <div>
    <v-card width="500" class="mx-auto mt-8 px-6 pb-8">
      <h2 class="py-4" v-if="applicant">Applicant Sign Up</h2>
      <h2 class="py-4" v-else>Company Sign Up</h2>
      <v-text-field 
        outlined
        dense
        :label="applicant ? 'Name':'Company name'"
        v-model="name"
      ></v-text-field>
      <v-text-field 
        outlined
        dense
        label="Email"
        v-model="email"
      ></v-text-field>
      <v-text-field 
        outlined
        dense
        label="Password"
        type="password"
        v-model="password"
      ></v-text-field>
      <v-text-field 
        outlined
        dense
        label="Confirm Password"
        type="password"
        v-model="repassword"
      ></v-text-field>
      <v-btn
        block
        class="elevation-1 green white--text mb-2"
        @click="signUp"
      >Sign Up</v-btn>
      <a class="body-2" @click="applicant = false" v-if="applicant">Sign up as company</a>
      <a class="body-2" @click="applicant = true" v-else>Sign up as applicant</a>
    </v-card>
  </div>
</template>

<script>
import {snackbar} from '../mixins/snackbar'

export default {
  mixins: [snackbar],
  data:()=>({
    name: '',
    email: '',
    password: '',
    repassword: '',
    applicant: true,
  }),
  methods:{
    signUp(){
      let uri = 'signUpApplicant'
      if(!this.applicant){ uri = 'signUpCompany' }
      if(this.password === this.repassword){
        this.$store.dispatch(`auth/${uri}`, {
          name: this.name,
          email: this.email,
          password: this.password
        }).then(res => {
          if(res.response){
            // sign in after registration
            this.$store.dispatch('auth/signIn', {
              email: this.email,
              password: this.password
            }).then(res=>{
              if(res.response){
                this.$router.push(res.data.role)
              }
              this.setSnackbar(true,null,res)
            }).catch(err=>{ 
              console.log(err) 
              this.setSnackbar(true,null,err.message)
            })
          }else{ 
            console.log(res)
            this.setSnackbar(true,null,res.message)
          }
        }).catch(err => { 
          console.log(err) 
          this.setSnackbar(true,null,err.message)
        })
      }else{
        console.log('password does not match')
      }
    }
  }
}
</script>

<style>

</style>