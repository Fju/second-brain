import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './css/index.scss'
import App from './App.vue'

import Page from './pages/Page.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/p/:id', component: Page }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
