export const snackbar = {
    methods:{
        setSnackbar(show, duration, message){
            this.$store.dispatch('core/setSnackbar', {
                show,
                duration: duration ? duration : '4000',
                message
            })
        }
    }
}