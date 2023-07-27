<script>
import Card from './Card.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    words: JSON,
  },
  components: {
    Card
  },
  data() {
    return {
      idCard: null
    }
  },
  methods: {
    selected(id) {
      this.idCard = id;
      console.log(this.idCard)
      this.changeIdCard(id)
    },
    isSelected(id){
      return this.idCard === id;
    },
    ...mapMutations(['changeIdCard']),
  },
  computed: {
    ...mapState(['listWords'])
  }
}
</script>
<template>
  <section class="grid-card">
    <article class="board">
      <div v-for="word in words" @click="selected(word.id)">
          <div class="box-card" @click="onCardClick">
            <img :src="word.imagen" :alt="word.palabra" :id="word.id" :title="word.palabra">
            <div class="card-shadow" :class="{ 'activada': isSelected(word.id) }"></div>
          </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.c {
  background-color: red;
}

.grid-card {
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
}

.board {
  background-color: rgba(3, 118, 184, 0.486);
  border-radius: 15px;
  width: 98%;
  display: grid;
  grid-template-columns: repeat(9, 110px);
  grid-template-rows: 126px 126px 126px;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .board {
    display: grid;
    grid-template-columns: repeat(2, 110px);
    justify-content: center;
    align-items: center;
  }
}

.box{
  display: flex;
  justify-content: center;
  position: relative;
}
.box-card{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 110px;
  width: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}
.activada{
  background-color: rgba(255, 0, 0, 0.555)
}
.restringido{
  background-color: black;
}
.card-shadow{
  height: 110px;
  width: 100px;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
}
.card-shadow:hover{
  cursor: pointer;
  background-color: rgba(253, 124, 124, 0.8);
}
.enable{
  background-color: rgba(61, 61, 61, 0.8);
}
img{
  position: absolute;
  height: 100px;
  width: 90px;
  border-radius: 10px; 
}
</style>