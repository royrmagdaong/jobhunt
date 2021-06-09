<template>
  <v-card
    width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{ get(jobPost, 'author.name') }}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ get(jobPost, 'jobTitle') }}
        </v-list-item-title>
        <div class="caption">Expected salary: {{ get(jobPost, 'expectedSalary') }}</div>
        <div class="caption">Date posted: {{ formatDate(get(jobPost, 'created_at')) }}</div>
        <v-list-item-subtitle>{{ get(jobPost, 'jobDescription') }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        text
        color="primary"
      >
        Apply
      </v-btn>
      <v-btn
        outlined
        text
        color="primary"
      >
        See more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { get } from 'lodash'
import { timedate } from '../mixins/timedate'

export default {
    mixins: [timedate],
    props: ['jobPost'],
    data: () => ({
        get
    })
}
</script>

<style>

</style>