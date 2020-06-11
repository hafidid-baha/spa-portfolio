import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Info from '../components/home/Infoleft.vue'
import Details from '../components/home/Details.vue'
import ProjectDetails from '../components/home/ProjectDetails.vue'
import Index from '../components/dashboard/Index.vue'
import Projects from '../components/dashboard/Projects.vue'
import AddProject from '../components/dashboard/AddProject.vue'
import Ideas from '../components/dashboard/Ideas.vue'
import AddIdea from '../components/dashboard/AddIdea.vue'
import Profile from '../components/dashboard/Profile.vue'
import Interests from '../components/dashboard/Interests.vue'
import AddInterest from '../components/dashboard/AddInterest.vue'
import Dashboard from '../views/Dashboard.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '',
        component: Info
      },
      {
        path: 'Details',
        component: Details
      },
      {
        path: 'ProjectDetails',
        component: ProjectDetails
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children:[
      {
        path:'',
        component:Index
      },
      {
        path:'Project',
        component:Projects
      },
      {
        path:'AddProject',
        component:AddProject
      },
      {
        path:'Ideas',
        component:Ideas
      },
      {
        path:'AddIdea',
        component:AddIdea
      },
      {
        path:'Profile',
        component:Profile
      },
      {
        path: 'Interests',
        component: Interests
      },
      {
        path: 'AddInterest',
        component: AddInterest
      }
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  }
]

const router = new VueRouter({
  routes
})

export default router
