<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Número</th>
          <th scope="col">Indicador</th>
          <th scope="col">Valor $ en CLP</th>
          <th scope="col">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in arrayApiHome" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <th>{{ item.indicador.nombre }}</th>
          <th>{{ item.indicador.valor }}</th>
            <th>{{ fecha }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "Home",
computed: {
  ...mapState(["arrayApiHome","fecha"])
},

  mounted() {
    let indicadores = "";
    axios
      .get("https://mindicador.cl/api")
      .then((response) => {
        indicadores = [
          { indicador: response.data.uf },
          { indicador: response.data.utm },
          { indicador: response.data.dolar },
          { indicador: response.data.euro },
          { indicador: response.data.libra_cobre},
          { indicador: response.data.bitcoin },
        ];
         this.$store.dispatch("setfecha", response.data.fecha);
        console.log(response.data);
        console.log(indicadores);
      })
      .then((response) => {
        this.$store.dispatch("setconsulta", indicadores);
      })
      .catch((err) => {
        alert("Error");
      });
  },
};
</script>

<style>
#table{
  padding: 30px;
  text-align: center;
}
</style>