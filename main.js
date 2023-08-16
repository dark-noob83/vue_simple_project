import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import 'tachyons'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'


const app=createApp(App)
app.use(router)
app.mount('#app')
