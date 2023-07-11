<script>
import words from '../assets/words'
import { elegir21 } from '../assets/funciones'

export default{
    data(){
      return{
        //ADD funcion de comprobacion de dificultad
        data:words[0].palabras,
        data2:elegir21(words[0].palabras)
      }
    },
    mounted(){
      elegir21(words[0].palabras)
    },
    methods:{
      scrollLeft(){
        const container = this.$refs.listContainer;
        container.style.transform = 'translateX(${container.getBoundingClientRect().width * -1}px)'
      },
      scrollRight(){
        const container = this.$refs.listContainer
        container.style.transform = 'translateX(0)'
      }
    }
    
  }
</script>
<template>
  <article class="horizontal">
    <button @click="scrollLeft" class="btn-x">left</button>
    <div class="list-container" ref="listContainer">
      <ul class="horizontal-list">
        <li class="element-list" v-for="dato in data2" :key="dato.id">{{ dato.palabra }}</li>
      </ul>
    </div>
    <button @click="scrollRight" class="btn-x">right</button>
  </article>
</template>
<style scoped>
.horizontal{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-container{
  white-space: nowrap;
}
.horizontal-list{
  display: flex;
  width: 90vw;

  height: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  overflow-x: hidden;
  align-items: center;
  transition: transform 0.3s ease;
}
.element-list{
  border: 1px solid black;
  padding: 1px 10px;
}
.btn-x{
  cursor: pointer;
  width: 5vw;
  height: 50px;
  border: 2px solid black;
  background-color: white;
  border-radius: 1000px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}
.btn-x:hover{
  background-color: rgba(0, 0, 0, 1);
  color: white;
  border: 2px solid white;
}



.list{
  display: flex;
  background-color: rgba(250, 150, 150, 0.25);
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  overflow: auto;
  overflow-x: auto;
  overflow-y: hidden;
}
.labeltxt{
  cursor: pointer;
  border: 1px solid black;
  width: 100px;
  padding: 2px 5px;
  background-color: white;
}
.labeltxt:hover{
  background-color: rgba(180, 180, 180, 0.25);
}
</style>