import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

const app = createApp(App)

const nameSave = localStorage.getItem('name')
const difficultySave = localStorage.getItem('difficulty')

if(nameSave){store.commit('changeName',nameSave)}
if(difficultySave){store.commit('changeDifficulty',difficultySave)}

app.use(router)
app.use(store)
app.mount('#app')
