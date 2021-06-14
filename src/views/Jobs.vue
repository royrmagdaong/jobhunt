<template>
  <v-container>
      <v-row>
        <v-col cols="3">
            <job-filter class="job-filter"></job-filter>
        </v-col>
        <v-col cols="9">
            <job-item v-for="(jobPost, index) in get(jobPosts, 'jobs')" :key="index" class="mb-2" :jobPost="jobPost"></job-item>
            <v-pagination
                v-model="page"
                :length="Math.ceil(get(jobPosts, 'total')/get(jobPosts, 'limit')) || 0"
                @input="paginate"
            ></v-pagination>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JobItem from '../components/JobItem.vue'
import JobFilter from '../components/JobsFilter.vue'

import {get} from 'lodash'

export default {
    data:()=>({
        page: 1,
        get
    }),
    components:{
        'job-item': JobItem,
        'job-filter': JobFilter
    },
    mounted(){
        this.$store.dispatch('jobs/loadJobs', { page: this.page })
    },
    computed:{
        jobPosts(){
            return this.$store.getters['jobs/getJobPosts']
        },
    },
    methods:{
        paginate(){
            this.$store.dispatch('jobs/loadJobs', { page: this.page })
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