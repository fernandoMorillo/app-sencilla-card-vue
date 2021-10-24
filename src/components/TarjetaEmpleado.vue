<template>
  <div class="card" :class="{noActivo:!state}">
      <h3>{{nombre}}</h3>
      <hr>
      <p>{{tel}}</p>
      <p>{{correo}}</p>
      <btnState @stateUser="state = $event"> </btnState>
      <button @click="borrar(index)">Borrar</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
        state:true
    }
  },
 props: {
   nombre: {
     type: String,
     default: "Usuario"
   },
   tel: {
     type:String,
     default:"3043333"
   },
   correo: {
     type:String,
     required: true
   },
   borrar:Function,
   index:Number
 },
};
</script>
<style>
.card {
    width: 300px;
    min-height: 150px;
    padding: 5px;
    margin: 10px;
    border: solid 1px #ccc;
    box-shadow: #ccc 2px 2px 1px;

}
.noActivo {
  border: solid 2px rgb(255, 0, 0);
}
</style>