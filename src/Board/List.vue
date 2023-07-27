<script>
export default {
  props:{
    words:JSON
  },
  data() {  
    return {
      idWord:null
    }
  },
  methods: {
    selected(id){
      this.idWord = id;
      this.$emit('selectedId',this.idWord)
    },
    isSelected(id){
      return this.idWord === id;
    }
  },
}
</script>
<template>
  <section class="lista">
      <div class="element" 
      v-for="word in words" 
      :key="word.id" 
      @click="selected(word.id)" 
      :class="{ 'selected' : isSelected(word.id)}">
        {{ word.palabra }}
      </div>
  </section>
</template>
<style scoped>
.restringido{
  background-color: black;
}
.lista{
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

.element{
  cursor: pointer;
  background-color: rgba(0, 255, 115, 0.685);
  border-radius: 10px;
  padding: 0px 10px;
  margin: 0px 10px;
}
.element:hover{
  background-color: rgb(0, 204, 255);
}
.selected{
  background-color: yellow;
}
</style>