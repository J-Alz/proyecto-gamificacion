import { createStore } from 'vuex'

const store = createStore({
  state(){
    return{
      name:'',
      difficulty:'',

    }
  },
  mutations:{
    changeName(state, newName){
      state.name = newName;
    }
  },
  actions:{

  },
  getters:{
    getName:state => state.name
  }
})

export default store