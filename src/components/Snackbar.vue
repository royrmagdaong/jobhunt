<template>
<v-snackbar id="app-snackbar" v-model="snackbar.show" top right :timeout="snackbar.duration" color="secondary" elevation-10 vertical>
    <div>{{ snackbar.message }}</div>
    <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="setSnackbar(false,'4000', '')">Close</v-btn>
    </template>
</v-snackbar>
</template>

<script>
export default {
    data: () => ({

    }),
    computed:{
        snackbar(){
            return this.$store.getters['core/getSnackbar']
        },
    },
    methods:{
        setSnackbar(show, duration, message){
            this.$store.dispatch('core/setSnackbar', { show, duration, message })
        }
    }
}
</script>

<style scoped>
#app-snackbar{
    top: 80px;
}
</style>