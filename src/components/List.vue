<script>
export default {
  props: {
    words:[],
  },
  data() {  
    return {
      selectedWordId: null,
    }
  },
  methods: {
    isSelected(wordId){
      return this.selectedWordId === wordId
    },
    selectWord(wordId){
      this.selectedWordId = wordId;
      this.$emit('wordSelected',this.selectedWordId)
    },
    //Agregar funcion para marcar como negro tambien las palabras
  }

}
</script>

<template>
  <section class="horizontal">
    <article class="list-container">
      <div 
      v-for="dato in words" 
      class="element"
      :class="{ selected : isSelected(dato.id)}"
      :key="dato.id"
      @click="selectWord(dato.id)">
        {{ dato.palabra }}
      </div>
    </article>
  </section>
</template>

<style scoped>
.restringido{
  background-color: black;
}
.horizontal{
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: rgba(3, 117, 184,1);
  
}
.list-container{
  display: flex;
  width: 98%;
  height: 100%;
  background-color: rgba(3, 117, 184,1);
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.element{
  cursor: pointer;
  background-color: yellow;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0px 10px;
  margin: 0px 10px;
}
.element:hover{
  background-color: aqua;
}
.selected{
  background-color: blue;
}
</style>