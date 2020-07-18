import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  /*   indicadores: ["uf", "dolar", "euro", "utm", "libra_cobre", "bitcoin"], */
    /* selecters: "", */
   /*  info: {}, */
    arrayApiHome: "",
    fecha: "",
  },

  mutations: {

    stateconsultahome(state, data) {
      state.arrayApiHome = data;
    },
    setfechastate(state,data){
      state.fecha=data;
    },
    /*   SET_INDICADOR(state,data)
    state.indicadores = data */
  },
  actions: {
    setconsulta({ commit }, data) {
      commit("stateconsultahome", data);
    },
    setfecha({commit},data){
      commit("setfechastate",data);
    }
    
    /* buscarIndicador(indicadores) {
      axios
        .get(
          `
           https://mindicador.cl/api/${indicadores}/${fecha}
        `
        )
        .then((response) => {
          console.log(response.data);
          this.info = response.data;
        });
    }, */
    /*buscarIndicador({commit}){
axios.get( `
           https://mindicador.cl/api
        `)
        .then(response => {
         data = response.data;
commit('SET_INDICADOR', data)
} 

 */
  },
  modules: {},
});
