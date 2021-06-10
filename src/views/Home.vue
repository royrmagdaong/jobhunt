<template>
<div>
    <app-banner></app-banner>
    <job-category></job-category>
    <trusted-by></trusted-by>
    <hiring-scope></hiring-scope>
    <how-it-works></how-it-works>
    <choose-offers></choose-offers>
    <top-skills></top-skills>
    <trending-skills></trending-skills>

    <app-footer></app-footer>
</div>
</template>

<script>
import Banner from '../components/home/Banner'
import Footer from '../components/Footer'
import JobCategory from '../components/home/JobCategory'
import TrustedBy from '../components/home/TrustedBy'
import HiringScope from '../components/home/HiringScope'
import HowItWorks from '../components/home/HowItWorks'
import ChooseOffers from '../components/home/ChooseOffers'
import TopSkills from '../components/home/TopSkills'
import TrendingSkills from '../components/home/TrendingSkills'


export default {
    components:{
        'app-banner':Banner,
        'app-footer':Footer,
        'job-category':JobCategory,
        'trusted-by':TrustedBy,
        'hiring-scope':HiringScope,
        'how-it-works':HowItWorks,
        'choose-offers':ChooseOffers,
        'top-skills':TopSkills,
        'trending-skills':TrendingSkills
    },
    data:()=>({
    }),
    methods:{

    },
}
</script>

<style>

</style>