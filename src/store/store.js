import { createStore } from "vuex";


export default createStore({
  state: {
    isOpenIndex : []
  },

  getters: {
    getIsopenIndex : (state) => {
      return state.isOpenIndex
    }
  },
  mutations: {
    isOpenAvantage: (state,payload) => {

        state.isOpenIndex.push(payload)
      
    },
    removeAvantage : (state,payload) => {
      state.isOpenIndex.forEach(element => {
        if(element == payload){
          const equalElement = (element) => element == payload;
          let findedIndex = state.isOpenIndex.findIndex(equalElement)
          state.isOpenIndex.splice(findedIndex,1)
        }
      });
    }

  },

  actions: {},
});