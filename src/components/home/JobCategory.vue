<template>
  <v-container>
      <v-row>
          <v-col cols="12" xl="3" lg="4" md="4" sm="6"
            v-for="(jobCategory,index) in jobCategeries"
            :key="index"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card
                    class="mx-auto"
                    max-width="300"
                    :elevation="hover ? 12 : 1"
                    style="cursor:pointer"
                >
                    <div style="background:#424242; height:180px;">

                    </div>
                    <v-card-text class="text--primary text-center">
                        <p class="body-1 ma-0">{{jobCategory.title}}</p>
                    </v-card-text>
                </v-card>
            </v-hover>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data:()=>({
        jobCategeries:[
            {
                title: 'Web, Mobile & Software Dev'
            },
            {
                title: 'Design & Creative'
            },
            {
                title: 'Sales & Marketing'
            },
            {
                title: 'Customer Service'
            },
            {
                title: 'Data Science & Analytics'
            },
            {
                title: 'Engineering & Architecture'
            },
        ]
    }),

}
</script>

<style>

</style>