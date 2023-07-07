<script>
import words from '../assets/words.js'
export default{
    
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
  <article class="list">
    
      <label v-for= "dato in data" :key="dato.id"  :palabra =dato.palabra > 
       {{dato.palabra}}
      </label>
    
    

  </article>
</template>
<style scoped>
.list{
  background-color: rgba(250, 150, 150, 0.25);
}
</style>