import { createStore } from 'vuex'
import words from './assets/words';

const store = createStore({
  state(){
    return{
      name:'',
      difficulty: '',
      listWords:localStorage.getItem('listWords'),
      lifePlayer:4,
      score:0,
      coins:0,
      timer:600,
      showFin:false,
      showInfo:false,
      selectedIdCard:0,
      IdWord:0,
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
    changeSelectedIdCard(state, newSelected){
      state.selectedIdCard = newSelected;
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