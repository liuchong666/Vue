import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[{
        path: '/Page1', component: Page1
    },{
        path: '/Page2', component: Page2
    }]
})

export default router;