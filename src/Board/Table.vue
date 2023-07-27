<script>
import Card from './Card.vue'
import { mapState, mapMutations } from 'vuex'
export default{
  props: {
    words:JSON,
  },
  components: {
    Card
  },
  data() {
    return {
      idCard:null
    }
  },
  methods:{
    selected(id){
      this.idCard = id;
      console.log(this.idCard)
    },
    ...mapMutations(['changeSelectedIdCard']),
  },
  computed: {
    ...mapState(['listWords'])
  }
}
</script>
<template>
  <section class="grid-card">
    <article class="board" >
      <div v-for="word in words" @click="selected(word.id)">
        <Card 
        :key="word.id"
        :url="word.imagen" 
        :palabra="word.palabra" 
        :significado="word.significado" 
        :id="word.id"
        />
      </div>
    </article>
  </section>
</template>

<style scoped>
.c{
  background-color: red;
}
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
@media (max-width: 768px) {
  .board{
    display: grid;
    grid-template-columns: repeat(3,110px);
  
    justify-content: center;
    align-items: center;
  }
}
</style>