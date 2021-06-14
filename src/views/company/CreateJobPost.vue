<template>
  <v-container>
      <v-card width="600" class="mt-12 pa-6 mx-auto">
          <h2 class="mb-4">Create Post</h2>
          <v-text-field
            label="Job Title"
            class="mb-2"
            outlined
            hide-details
            dense
            v-model="title"
          ></v-text-field>
          <v-textarea
            label="Job Description"
            class="mb-2"
            outlined
            hide-details
            dense
            v-model="description"
          ></v-textarea>
          <v-text-field
            label="Expected Salary"
            class="mb-2"
            outlined
            hide-details
            dense
            v-model="expectedSalary"
          ></v-text-field>
          <v-text-field
            label="Number of applicant needed"
            type="number"
            min="1"
            class="mb-2"
            outlined
            hide-details
            dense
            v-model="numberOfApplicantNeeded"
          ></v-text-field>
          <v-btn
            color="green lighten-1"
            class="white--text"
            block
            @click="createPost"
          >Post</v-btn>
      </v-card>
  </v-container>
</template>

<script>
import {snackbar} from '../../mixins/snackbar'
export default {
  mixins: [snackbar],
  data:() => ({
    title: '',
    description: '',
    expectedSalary: '',
    numberOfApplicantNeeded: 1
  }),
  methods:{
    createPost(){
      if(this.title && this.description && this.expectedSalary && this.numberOfApplicantNeeded > 0){
        this.$store.dispatch('companyPost/createJobPost', {
          jobTitle: this.title,
          jobDescription: this.description,
          expectedSalary: this.expectedSalary,
          numberOfApplicantNeeded: this.numberOfApplicantNeeded
        }).then(res => {
          if(res.response){
            this.title = ''
            this.description = ''
            this.expectedSalary = ''
            this.numberOfApplicantNeeded = 1
            this.setSnackbar(true,null, 'Post created.')
          }
        }).catch(err => {
          console.log(err)
        })
      }else{
        this.setSnackbar(true,null, 'please fill up all fields.')
      }
    }
  }
}
</script>

<style>

</style>