import moment from 'moment'
export const timedate = {
    methods: {
        formatDate(date){
            return moment(date).format('MMM DD, YYYY')
        }
    }
} 