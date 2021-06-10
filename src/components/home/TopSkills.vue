<template>
  <v-container fluid class="white pa-10">
      <v-row no-gutters>
          <v-col cols="12">
              <p class="title ma-0 pb-4">Top Skills</p>
          </v-col>
          <v-col cols="12" lg="3" md="6" sm="6">
              <div v-for="(col,index) in col1" :key="index">
                <a class="ma-1 body-2 black--text">{{col}}</a>
              </div>
          </v-col>
          <v-col cols="12" lg="3" md="6" sm="6">
              <div v-for="(col,index) in col2" :key="index">
                <a class="ma-1 body-2 black--text">{{col}}</a>
              </div>
          </v-col>
          <v-col cols="12" lg="3" md="6" sm="6">
              <div v-for="(col,index) in col3" :key="index">
                <a class="ma-1 body-2 black--text">{{col}}</a>
              </div>
          </v-col>
          <v-col cols="12" lg="3" md="6" sm="6">
              <div v-for="(col,index) in col4" :key="index">
                <a class="ma-1 body-2 black--text">{{col}}</a>
              </div>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data:()=>({
        col1:[
            'Android Developer',
            'Customer Service Representative',
            'Front-End Developer',
            'iOS Developer',
            'Mobile App Developer',
            'Sales Consultant',
            'Software Engineer',
            'Virtual Assistant'
        ],
        col2:[
            'Bookkeeper',
            'Database Administrator',
            'Game Developer',
            'Java Developer',
            'PHP Developer',
            'SEO Expert',
            'Technical Writer',
            'Web Designer'
        ],
        col3:[
            'Content Writer',
            'Data Scientist',
            'Graphic Designer',
            'JavaScript Developer',
            'Python Developer',
            'Social Media Manager',
            'UI Designer',
            'Wordpress Developer'
        ],
        col4:[
            'Copywriter',
            'Facebook Developer',
            'Information Security Analyst',
            'Logo Designer',
            'Resume Writer',
            'Software Developer',
            'UX Designer',
            'Writer'
        ],
    }),
}
</script>

<style>

</style>