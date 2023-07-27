import { createStore } from 'vuex'
import words from './assets/words';

const store = createStore({
  state(){
    return{
      name:'',
      difficulty: '',
      listWords:[],
      lifePlayer:4,
      score:0,
      coins:0,
    }
  },
  mutations:{
    changeName(state, newName){
      state.name = newName;
      localStorage.setItem('name',newName);
    },
    changeDifficulty(state,newDifficulty){
      state.difficulty = newDifficulty;
      localStorage.setItem('difficulty',newDifficulty)
    },
    changeListWords(state,newListWords){
      state.listWords = newListWords;
      localStorage.setItem('listWords',newListWords)
    },
    changeLifePlayer(state,newLifePlayer){
      state.lifePlayer = newLifePlayer;
      localStorage.setItem('lifePlayer',newLifePlayer);
    },
    changeScore(state,newScore){
      state.score = newScore;
      localStorage.setItem('score',newScore);
    },
    changeCoins(state,newCoins){
      state.coins = newCoins;
      localStorage.setItem('coins',newCoins);
    }
  },
  actions:{

  },
  getters:{
    getName:state => state.name
  }
})

export default store