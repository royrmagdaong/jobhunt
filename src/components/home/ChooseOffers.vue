<template>
  <v-container >
      <v-row>
          <v-col cols="12" >
              <p class="display-1 font-weight-bold text-center">Choose the offering that works best for you</p>
              <p class="text-center body-2">All options include access to Starjobs' talent pool of top-quality freelancers and agencies.</p>
          </v-col>
          <!-- BASIC -->
          <v-col cols="12" lg="3" sm="6" >
              <v-card tile elevation="1" class="mx-2" min-height="100%">
                  <div class="text-center">
                    <p class="title pt-2">Basic</p>
                    <v-btn class="primary">Select Basic</v-btn>
                    <p class="body-1 ma-2">FREE*</p>
                  </div>
                  <v-divider></v-divider>
                  <v-row style="width:100%;" class="mx-0 pa-2">
                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Verified work history and reviews</p>
                      </v-col>

                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Unlimited proposals</p>
                      </v-col>

                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Built-in collaboration tools and easy payments</p>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
          <!-- PLUS -->
          <v-col cols="12" lg="3" sm="6">
              <v-card tile elevation="1" class="mx-2" min-height="100%">
                  <div class="text-center">
                    <p class="title pt-2">Plus</p>
                    <v-btn class="primary">Select Plus</v-btn>
                    <p class="body-1 ma-2">P1,200.00/<span class="caption">month*</span></p>
                  </div>
                  <v-divider></v-divider>
                  <v-row style="width:100%;" class="mx-0 pa-2">
                      <v-col cols="12"><p class="ma-0 caption font-weight-light text-center">Everything in <span class="font-weight-bold">Basic</span>, and:</p></v-col>
                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Dedicated account managers to help you find and hire quality talent fast</p>
                      </v-col>

                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Project tracking and collaboration tools for teams</p>
                      </v-col>

                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Tailored search results featuring Top Rated and Rising Talent</p>
                      </v-col>
                      <v-col cols="1" class="py-1 px-1">
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <a class="body-2 primary--text">Learn more</a>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
          <!-- BUSINESS -->
          <v-col cols="12" lg="3" sm="6">
              <v-card tile elevation="1" class="mx-2" min-height="100%">
                  <div class="text-center">
                    <p class="title pt-2">Business</p>
                    <v-btn class="primary">Contact Us</v-btn>
                    <p class="body-1 ma-2">P12,000.00/<span class="caption">month*</span></p>
                  </div>
                  <v-divider></v-divider>
                  <v-row style="width:100%;" class="mx-0 pa-2">
                      <v-col cols="12"><p class="ma-0 caption font-weight-light text-center">Everything in <span class="font-weight-bold">Plus</span>, and:</p></v-col>
                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Consolidated billing and invoicing with net 30 pay</p>
                      </v-col>

                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Dedicated team of advisors to get you hiring faster and more successfully</p>
                      </v-col>

                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Detailed reporting with company insights and trends</p>
                      </v-col>
                      <v-col cols="1" class="py-1 px-1">
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <a class="body-2 primary--text">Learn more</a>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
          <!-- ENTERPRISE -->
          <v-col cols="12" lg="3" sm="6">
              <v-card tile elevation="1" class="mx-2" min-height="100%">
                  <div class="text-center">
                    <p class="title pt-2">Enterprise</p>
                    <v-btn class="primary">Contact Us</v-btn>
                    <p class="body-1 ma-2">Price Varies<span class="caption"> - Contact Us</span></p>
                  </div>
                  <v-divider></v-divider>
                  <v-row style="width:100%;" class="mx-0 pa-2">
                      <v-col cols="12"><p class="ma-0 caption font-weight-light text-center">Everything in <span class="font-weight-bold">Business</span>, and:</p></v-col>
                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Custom configurable contracting and onboarding process</p>
                      </v-col>

                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Worker classification compliance services</p>
                      </v-col>

                      <v-col cols="1" class="py-1 px-1">
                          <i class="fas fa-check primary--text"></i>
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <p class="body-2 ma-0">Project-based or managed solutions, and dedicated account executive</p>
                      </v-col>
                      <v-col cols="1" class="py-1 px-1">
                      </v-col>
                      <v-col cols="11" class="px-1 py-1">
                          <a class="body-2 primary--text">Learn more</a>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>