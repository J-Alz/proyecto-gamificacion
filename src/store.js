import { createStore } from 'vuex'

const store = createStore({
  state(){
    return{
      name:'',
      difficulty: 0,

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
    }
  },
  actions:{

  },
  getters:{
    getName:state => state.name
  }
})

export default store