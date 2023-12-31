import { createRouter, createWebHistory } from 'vue-router'
import Works from '../pages/Works.vue'
import News from '../pages/News.vue'
import Ecommerce from '../pages/Ecommerce.vue'
import Cv from '../pages/Cv.vue'
import Option from '../components/Option.vue'
const routes =[
    {path: '/', component: Cv},
    {path: '/works', component: Works},
    {path: '/ecommerce', component: News },
    {path: '/cv', component: Ecommerce},
    {path: '/options', component: Option}

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router