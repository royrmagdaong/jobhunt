import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import NotFound from './views/NotFound'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'

// admin
import AdminHome from './views/admin/Home'

// applicant
import ApplicantHome from './views/applicant/Home'

// company
import CompanyHome from './views/company/Home'


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
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: SignIn
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminHome
    },
    {
      path: '/applicant',
      name: 'applicant',
      component: ApplicantHome
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyHome
    },
  ]
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;