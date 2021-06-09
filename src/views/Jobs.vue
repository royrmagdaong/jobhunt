<template>
  <v-container>
      <v-row>
        <v-col cols="3">
            <job-filter class="job-filter"></job-filter>
        </v-col>
        <v-col cols="9">
            <job-item v-for="(jobPost, index) in jobPosts" :key="index" class="mb-2" :jobPost="jobPost"></job-item>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JobItem from '../components/JobItem.vue'
import JobFilter from '../components/JobsFilter.vue'

export default {
    components:{
        'job-item': JobItem,
        'job-filter': JobFilter
    },
    computed:{
        jobPosts(){
            return this.$store.getters['jobs/getJobPosts']
        }
    }
}
</script>

<style scoped>
.job-filter{
    position: -webkit-sticky;
    position: sticky;
    top: 92px;
}
</style>