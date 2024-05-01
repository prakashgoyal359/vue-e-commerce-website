import { createApp } from 'vue'
import App from './App.vue'
import  router  from './routers'
import { store } from './store/store'
import "./assets/style.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const app = createApp(App);
app.use(router)
app.use(store)
app.mount('#app');
