<script>
  import Card from './Card.vue'

export default{
  props: {
    words:[],
    exists:[],
  },
  components: {
    Card
  },
  data() {
    return {
      data: [],
      selectedCardId:null,
    }
  },
  methods:{
    isSelectedCard(cardId){
      return this.selectedCardId === cardId
    },
    existInList(cardId){
      return this.exists.includes(cardId)
    },
    selectCard(cardId){
      this.selectedCardId = cardId
      this.$emit('cardSelected',cardId)
      //console.log(this.selectedCardId)
    }
  }
}
</script>
<template>
  <section class="grid-card">
    <article class="board" >
      <Card v-for="dato in words" 
      :key="dato.id"
      :url="dato.imagen" 
      :palabra="dato.palabra" 
      :significado="dato.significado" 
      :id="dato.id"
      :selected="isSelectedCard(dato.id)"
      :exists="existInList(dato.id)"
      @cardSelected="selectCard"
      />
    </article>
  </section>
</template>

<style scoped>
.grid-card{
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 1fr;
  background-color: rgba(3, 117, 184,1);
}
.board{
  display: grid;
  grid-template-columns: repeat(9,110px);
  grid-template-rows: 126px 126px 126px;
  
  justify-content: center;
  align-items: center;
}
</style>