import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

const app = createApp(App)

const nameSave = localStorage.getItem('name');
const difficultySave = localStorage.getItem('difficulty');
const listWordsSave = localStorage.getItem('listWords');
const lifePlayerSave = localStorage.getItem('lifePlayer');
const scoreSave = localStorage.getItem('score');
const coinsSave = localStorage.getItem('coins');
const timerSave = localStorage.getItem('timer');

if(nameSave){store.commit('changeName',nameSave)}
if(difficultySave){store.commit('changeDifficulty',difficultySave)}
/*if(listWordsSave !== null && listWordsSave !== undefined){
  const lista = JSON.parse(listWordsSave);
  store.commit('changeListWords',lista)
}*/
if(listWordsSave){store.commit('changeListWords',listWordsSave)}
if(lifePlayerSave){store.commit('changeLifePlayer',lifePlayerSave)}
if(scoreSave){store.commit('changeScore',scoreSave)}
if(coinsSave){store.commit('changeCoinsSave',coinsSave)}
if(timerSave){store.commit('changeTimer',timerSave)}

app.use(router)
app.use(store)
app.mount('#app')
