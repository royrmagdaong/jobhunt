<template>
  <v-card width="100%" class="pa-4">
      <div class="title mb-2">Filter by</div>
      <v-text-field
        label="Industry"
        hide-details
        outlined
        dense
        class="mb-2"
      ></v-text-field>
      <v-text-field
        label="Position Title"
        hide-details
        outlined
        dense
        class="mb-2"
      ></v-text-field>
      <v-text-field
        label="Years of experience"
        hide-details
        outlined
        dense
        class="mb-2"
      ></v-text-field>
      <v-text-field
        label="Salary Range"
        hide-details
        outlined
        dense
        class="mb-2"
      ></v-text-field>
      <v-btn
        block
        color="green lighten-1"
        class="white--text"
      >Search</v-btn>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>