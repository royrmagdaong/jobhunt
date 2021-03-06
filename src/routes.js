import Vue from 'vue'
import Router from 'vue-router'

// 
import Home from './views/Home'
import NotFound from './views/NotFound'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'
import Jobs from './views/Jobs'


// admin
import AdminBase from './views/admin/Base'
import AdminUsers from './views/admin/Users'

// applicant
import ApplicantBase from './views/applicant/Base'
import ApplicantProfile from './views/applicant/Profile'
import ApplicantProfileSummary from './components/applicant/profile/Summary'
import ApplicantProfilePersonalInfo from './components/applicant/profile/PersonalInfo'
import ApplicantProfileEducation from './components/applicant/profile/Education'
import ApplicantProfileExperience from './components/applicant/profile/Experience'
import ApplicantProfileSkills from './components/applicant/profile/Skills'

// company
import CompanyBase from './views/company/Base'
import CompanyProfile from './views/company/Profile'
import CompanyProfileSummary from './components/company/profile/Summary'
import CompanyProfileJobs from './components/company/profile/Jobs'
import CompanyProfileUsers from './components/company/profile/Users'
import CompanyCreateJobPost from './views/company/CreateJobPost'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'page-not-found',
      component: NotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: SignUp,
      meta:{
        noLoggedInUser: true
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
    {
      path: '/login',
      name: 'login',
      component: SignIn,
      meta:{
        noLoggedInUser: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminBase,
      meta:{
        requiresAuth: true,
        isAdminOnly: true
      },
      children: [
        { path: "users", component: AdminUsers },
        { path: "*", component: NotFound } // should be last
      ]
    },
    {
      path: '/applicant',
      name: 'applicant',
      component: ApplicantBase,
      redirect: "applicant/profile",
      meta:{
        requiresAuth: true,
        isApplicantOnly: true
      },
      children: [
        { 
          path: "profile", 
          component: ApplicantProfile,
          children:[
            { path: "/", component: ApplicantProfileSummary },
            { path: "personal-info", component: ApplicantProfilePersonalInfo },
            { path: "education", component: ApplicantProfileEducation },
            { path: "experience", component: ApplicantProfileExperience },
            { path: "skills", component: ApplicantProfileSkills }
          ]
        },
        { path: "*", component: NotFound }
      ]
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyBase,
      redirect: "company/profile",
      meta:{
        requiresAuth: true,
        isCompanyOnly: true
      },
      children: [
        { 
          path: "profile", 
          component: CompanyProfile,
          children:[
            { path: "/", component: CompanyProfileSummary },
            { path: "jobs", component: CompanyProfileJobs },
            { path: "users", component: CompanyProfileUsers }
          ]
        },
        { path: "post", component: CompanyCreateJobPost },
        { path: "*", component: NotFound }
      ]
    },
  ]
});

router.beforeEach((to, from, next) => {
  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  let userRole = null
  if(userInfo){
    userRole = userInfo.role
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!userInfo) {
      next('/login')
    } else if( to.matched.some(record => record.meta.isAdminOnly) && (userRole==="applicant" || userRole==="company-admin" || userRole==="company-user") ){
      if(userRole==="applicant"){
        next('/applicant')
      }else{
        next('/company')
      }
    }else if( to.matched.some(record => record.meta.isCompanyOnly) && (userRole==="applicant" || userRole==="admin") ){
      if(userRole==="applicant"){
        next('/applicant')
      }else{
        next('/admin')
      }
    }else if( to.matched.some(record => record.meta.isApplicantOnly) && (userRole==="admin" || userRole==="company-admin" || userRole==="company-user") ){
      if(userRole==="admin"){
        next('/admin')
      }else{
        next('/company')
      }
    }else{
      next()
    }
  } else if(to.matched.some(record => record.meta.noLoggedInUser)){
    if(userRole){
      if(userRole === 'applicant'){
        next('/applicant')
      }else if(userRole === 'company-admin' || userRole === 'company-user'){
        next('/company')
      }else{
        next('/admin')
      }
    }else{
      next()
    }
  }else{
    next()
  }
  
});

export default router;