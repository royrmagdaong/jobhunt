<template>
  <v-container fluid class="white">
      <v-row>
          <v-col cols="12" class="pa-0">
              <p class="title ma-0 text-center  ">Trusted by 100+ Companies</p>
              <router-link to="/" style="text-decoration:none;">
                <p class="caption ma-0 text-center primary--text">show more...</p>
              </router-link>
          </v-col>
          <v-col cols="12" class="py-0 px-10">
              <v-row>
                  <v-col cols="6" sm="4" md="2" lg="2" v-for="(companyLogo,index) in companyLogos" :key="index" align-self="center">
                    <v-row align="center" justify="center" >
                        <v-img :src="companyLogo" max-width="100px"></v-img>
                    </v-row>
                  </v-col>
              </v-row>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data:()=>({
        companyLogos:[
            'https://www.upwork.com/ab/assets/Adquiro/b410745/images/719fe55.svg',
            'https://www.upwork.com/ab/assets/Adquiro/b410745/images/6ab4d0f.svg',
            'https://www.upwork.com/ab/assets/Adquiro/b410745/images/814d018.svg',
            'https://www.upwork.com/ab/assets/Adquiro/b410745/images/ed7422f.svg',
            'https://www.upwork.com/ab/assets/Adquiro/b410745/images/1c2512c.svg',
            'https://www.upwork.com/ab/assets/Adquiro/b410745/images/c32b982.svg'
        ]
    }),
}
</script>

<style>

</style>