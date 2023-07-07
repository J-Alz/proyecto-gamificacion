<script>
  import Card from './Card.vue'
  import words from 'C:/Users/andy_/Documents/gamificacion/proyecto-gamificacion/src/assets/words.js'
  export default{
    components:{
      Card
    },
    data(){
      return{
        //ADD funcion de comprobacion de dificultad
        data:words[0].palabras,
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
  grid-template-columns: repeat(7,110px);
  grid-template-rows: 126px 126px 126px;
  
  justify-content: center;
  align-items: center;

  background-color: rgba(5, 190, 67, 0.623);
}
.board-card{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>