<script>
import Board from './Board.vue'
export default{
  data(){
    return{
      
    }
  },
  components:{
    Board
  }
}
</script>
<template>
  <article class="grid-card">
    <Board />
  </article>
</template>
<style scoped>
.grid-card{
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 1fr;
  background-color: rgba(3, 117, 184,1);
  /*background-color: rgba(150, 150, 250, 0.25);*/
}

</style>