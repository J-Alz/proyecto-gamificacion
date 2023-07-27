import { createStore } from 'vuex'
import words from './assets/words';

const store = createStore({
  state(){
    return{
      name:'',
      difficulty: '',
      listWords:localStorage.getItem('listWords'),
      lifePlayer:4,
      score:null,
      coins:0,
      timer:600,
      showFin:false,
      showInfo:false,
      IdCard:null,
      IdWord:null,
    }
  },
  mutations:{
    reset(state){
      state.score = 0
      state.IdCard = null
      state.IdWord = null
      state.coins = 0
      state.lifePlayer = 4
    },
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
      localStorage.setItem('listWords',JSON.stringify(newListWords))
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
    },
    changeTimer(state,newTimer){
      state.timer = newTimer;
      localStorage.setItem('timer',newTimer);
    },
    changeShowFin(state,newShowFin){
      state.showFin = newShowFin;
    },
    changeShowInfo(state,newShowInfo){
      state.showInfo = newShowInfo;
    },
    changeIdCard(state, newSelected){
      state.IdCard = newSelected;
    },
    changeIdWord(state, newSelected){
      state.IdWord = newSelected;
    }
  },
  actions:{

  },
  getters:{
    getName:state => state.name
  }
})

export default store