<template>
  <div>
    <v-card width="500" class="mx-auto mt-8 px-6 pb-8">
      <h2 class="py-4">Sign Up</h2>
      <v-text-field 
        outlined
        dense
        label="Name"
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
        class="elevation-1 green white--text"
        @click="register"
      >Sign Up</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data:()=>({
    name: '',
    email: '',
    password: '',
    repassword: ''
  }),
  methods:{
    register(){
      this.$store.dispatch('auth/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        repassword: this.repassword
      })
    }
  }
}
</script>

<style>

</style>