<script>
import Board from './Board.vue'
export default{
  data(){
    return{
      life: 4,
    }
  },
  components:{
    Board
  }
}
</script>
<template>
  <article class="grid-card">
    <div class="grid-aside">
      <span class="title-life">VIDAS RESTANTES</span>
      <div class="aside-life">
        <img src="https://www.svgrepo.com/show/503037/heart.svg" alt="" width="25" height="25">
        <h3>x{{ life }}</h3>
      </div>
    </div>
    <Board />
    <div class="grid-aside"></div>
  </article>
</template>
<style scoped>
.title-life{
  display: inline-block;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
}
.aside-life{
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-card{
  display: grid;
  grid-template-columns: 10vw 80vw 10vw;
  grid-template-rows: 1fr;

  /*background-color: rgba(150, 150, 250, 0.25);*/
}
.grid-aside{
  /*background-color: rgba(133, 81, 255, 0.356);*/
}
</style>