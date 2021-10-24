<template>
  <div id="app">
    <header-main></header-main>
    <hr>
    <button @click="activar">{{labelbtn}}</button>
    <div class="flex-container">
      <tarjeta-empleado
        v-for="(persona, i) in personas"
        :key="i + persona.nombre"
        :nombre="persona.nombre"
        :tel="persona.tel"
        :correo="persona.correo"
        :borrar="borrarPerosna"
        :index="i"
      ></tarjeta-empleado>
    </div>

    <footer-main></footer-main>
  </div>
</template>

<script>
import TarjetaEmpleado from "./components/TarjetaEmpleado.vue";
import FooterMain from "./components/FooterMain.vue";
import HeaderMain from "./components/HeaderMain.vue";
import {eventBus} from "./main"
export default {
  components: {
    TarjetaEmpleado,
    HeaderMain,
    FooterMain,
  },
  data() {
    return {
      title: "My web",
      state: true,
      personas: [
        { nombre: "Camila", tel: "245 54 54", correo: "camilo@vuecours.com" },
        { nombre: "José", tel: "422 23 23", correo: "jose@vuecours.com" },
        { nombre: "Francisco", tel: "278 93 54", correo: "pacho@vuecours.com" },
        { nombre: "Monica", tel: "255 55 55", correo: "mony@vuecours.com" },
        { nombre: "Guillermo", tel: "378 64 23", correo: "memo@vuecours.com" },
        { nombre: "Maria", tel: "123 46 87", correo: "mary@vuecours.com" },
      ],
    };
  },
  computed: {
    labelbtn(){
      return this.state ? 'Activar a todos' : 'Desactivar a todos'
    }
  },
  methods: {
    saludar() {
      alert("saludar");
      this.title = "cambio el titulo";
    },
    borrarPerosna(index){
      this.personas.splice(index, 1)
    },
    activar() {
      this.state = !this.state
      eventBus.$emit('activosAll', this.state)
    }
  },
  
};
</script>

<style>
h1 {
  color: green;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
