import HomePage from './components/HomePage.vue'
import ProductList from './components/ProductList.vue'
import AboutUs from './components/AboutUs.vue'
import ContactUs from './components/ContactUs.vue'
import CartPage from './components/CartPage.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:"HomePage",
        component: HomePage,
        path:"/"
    },
    {
        name:"ProductList",
        component: ProductList,
        path:"/ProductList"
    },
    {
        name:"ContactUs",
        component:ContactUs,
        path:"/ContactUs"
    },
    {
        name:"AboutUs",
        component:AboutUs,
        path:"/AboutUs"
    },
    {
        name:"CartPage",
        component:CartPage,
        path:"/CartPage"
    },
    {
        name:'cart-page',
        path: '/cart-page',
        component :CartPage
    },
];

const router = createRouter(
    {
        history:createWebHistory(),
        routes,
    }
)

export default router;