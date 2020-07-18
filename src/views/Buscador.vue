<template>

  <!-- FALTA HACER QUE SE GUARDE CADA BUSQUEDA Y SE MUESTRE EN LA OTRA VENTANA -->

  <!-- Inicio en Desplegar el menú de opciones de indicador  -->
  <div class="input-group mb-3">
    <h3>Ingresa una divisa</h3>
    <select
      v-model="selecters"
      class="custom-select"
      id="inputGroupSelect03"
      aria-label="Example select with button addon"
    >
      <option selected>Choose...</option>
      <option selected v-for="(indicador, index) in indicadores" :key="index">{{
        indicador
      }}</option>
    </select>
    <!-- Fin de Desplegar el menú de opciones de indicador  -->

    <!-- Ingreso del calendario fecha-selector -->
    <div>
      <h3>Ingresa la fecha</h3>
      <b-form-input v-model="fecha" placeholder="DD-MM-AAAA"></b-form-input>
    </div>
    <!-- inicio de botón -->

    <button
      type="button"
      class="btn btn-info"
      @click="buscarIndicador(selecters,fecha)"
    >
      Buscar
    </button>
    <!-- Fin del botón -->

    <!-- Listado del valor diario de cada uno de los indicadores xeach segun fecha! -->

    <!-- Traer la información desde la Api  -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(serie, index) in info.serie" :key="index">
          <td>{{ new Date(serie.fecha) }}</td>
          <td>{{ serie.valor }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Tabla",
  data() {
    return {
      indicadores: ["uf", "dolar", "euro", "utm", "libra_cobre", "bitcoin"],
      selecters: "",
      info: {},
      fecha: "",
    };
  },
  methods: {
    buscarIndicador(selecters,fecha) {
      axios
        .get(
          `
           https://mindicador.cl/api/${selecters}/${fecha} `
        )
        .then((response) => {
          console.log(response.data);
          this.info = response.data;
        });
    },
  },
  /*   computed: {
    ...mapState(["buscarIndicador"]),
  }, */
};
</script>
