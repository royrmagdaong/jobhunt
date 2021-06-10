<template>
  <v-card width="100%" height="800">
      <h1>Users</h1>
      <v-card width="500" class="pa-4">
        <v-text-field
          label="name"
          hide-details
          dense
          outlined
          class="mb-2"
          v-model="name"
        ></v-text-field>
        <v-text-field
          label="email"
          hide-details
          dense
          outlined
          class="mb-2"
          v-model="email"
        ></v-text-field>
        <v-text-field
          label="password"
          type="password"
          hide-details
          dense
          outlined
          class="mb-2"
          v-model="password"
        ></v-text-field>
        <v-text-field
          label="repeat password"
          type="password"
          hide-details
          dense
          outlined
          class="mb-2"
          v-model="repassword"
        ></v-text-field>
        <v-btn 
          color="primary" 
          block
          @click="signUpCompanyUser"
        >Add User</v-btn>
      </v-card>
  </v-card>
</template>

<script>
import {snackbar} from '../../../mixins/snackbar'
import {get} from 'lodash'
export default {
  mixins:[snackbar],
  data: () => ({
    name: '',
    email: '',
    password: '',
    repassword: '',
    get
  }),
  methods:{
    signUpCompanyUser(){
      if(this.name && this.email && this.password && this.repassword){
        if(this.password === this.repassword){
          this.$store.dispatch('auth/signUpCompanyUser', {
            name: this.name,
            email: this.email,
            password: this.password
          }).then(res => {
            if(res.response){
              this.setSnackbar(true,null,'user created')
              this.name = ''
              this.email = ''
              this.password = ''
              this.repassword = ''
            }
          }).catch(err => {
            this.setSnackbar(true,null,get(err, 'response.data.message'))
          })
        }else{
          this.setSnackbar(true,null,'password does not match.')
        }
      }else{
        this.setSnackbar(true,null,'please fill up all fields.')
      }
    }
  }
}
</script>

<style>

</style>