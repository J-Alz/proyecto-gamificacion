<script>
  import Card from './Card.vue'
  import words from '../assets/words.js'
  import { buscarPalabrasPorDificultad, elegir21 } from '../assets/funciones'

  export default{
    props: {
    dificultadSeleccionada: {
      type: String,
      required: true,
    },
  },
  watch: {
    dificultadSeleccionada: {
      immediate: true,
      handler(nuevaDificultad) {
        // Ejecuta la busqueda de al dificultad y se asigna a data2
        this.data = elegir21(buscarPalabrasPorDificultad(nuevaDificultad));
      },
    },
  },
  components: {
    Card
  },
  data() {
    return {
      //ADD funcion de comprobacion de dificultad
      data: [],
    }
  }
  //<div class="board-card"></div>
}
</script>
<template>
  <article class="board">
    <Card 
      v-for="dato in data" :key="dato.id"
      :url="dato.imagen" 
      :palabra="dato.palabra" 
      :significado="dato.significado" 
      :id="dato.id"/>
  </article>
</template>
<style scoped>
.board{
  display: grid;
  grid-template-columns: repeat(9,110px);
  grid-template-rows: 126px 126px 126px;
  
  justify-content: center;
  align-items: center;
}
.board-card{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>