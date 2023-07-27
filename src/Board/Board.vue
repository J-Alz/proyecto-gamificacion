<script>
import Header from './Header.vue'
import Timer from './Timer.vue'
import List from './List.vue'
import words from '../assets/words'
import Board from './Table.vue'

import Info from '../components/Info.vue'
import Fin from '../components/Fin.vue'
import { mapState, mapMutations } from 'vuex'

import Table from './Table.vue'


export default {
  components: {
    Header,
    Timer,
    List,
    Board,
    Info,
    Fin,
    Table
  },
  data() {
    return {
    };
  },
  methods: {
    updateIdList(id){
      this.changeIdWord(id)
      //console.log(this.IdWord)
    },
    ...mapMutations(['changeIdWord']),
  },
  computed: {
    ...mapState(['listWords','timer','showFin','showInfo','IdWord'])
  }
}
</script>
<template>
  <section class="contPage">
    <div class="contenedor">
      <div class="center">
        <Header />
      </div>
      <Timer :time="timer"/>
      <List :words="listWords" @selectedId="updateIdList"/>
      <Table :words="listWords"/>
    </div>
    <Fin v-show="showFin"></Fin>
    <Info v-show="showInfo"></Info>
  </section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Monomaniac+One&family=Open+Sans:wght@300&family=Poiret+One&family=Roboto:ital,wght@0,100;0,300;0,500;1,100&display=swap');

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contentFin {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(76, 233, 76, 0.25);
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  z-index: 1;
}

.contenedor {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 40px 60px 1fr;
  font-family: 'Roboto', sans-serif;
  /*background-color: rgba(150, 150, 250, 0.25);*/
}

.contPage {
  position: absolute;
}

.contenedor2 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(76, 233, 76, 0.25);
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  z-index: 1;
}

.ayuda {
  width: 90vw;
  height: 82vh;
  display: flex;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  background-color: white;
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-size: 30px;
}

p {
  padding: 0px 20px;
  text-align: justify;
}</style>