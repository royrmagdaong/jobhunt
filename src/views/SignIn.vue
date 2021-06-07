<template>
  <div>
    <v-card width="500" class="mx-auto mt-8 px-6 pb-8">
      <h2 class="py-4">Sign In</h2>
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
      <v-btn
        block
        class="elevation-1 green white--text"
        @click="login"
      >Sign In</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data:()=>({
    email: '',
    password: ''
  }),
  methods:{
    login(){
      this.$store.dispatch('auth/signIn', {
        email: this.email,
        password: this.password
      }).then(res=>{
        if(res.response){
          this.$router.push(res.data.role)
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>