import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { reveal } from './lib/reveal.js'

const app = createApp(App)

app.use(router)
app.directive('reveal', reveal)

app.mount('#app')
