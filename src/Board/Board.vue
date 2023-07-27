<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import List from '../components/List.vue'
import words from '../assets/words'
import Board from '../Panel/Board.vue'

import Info from '../components/Info.vue'
import Fin from '../components/Fin.vue'
function elegir21(palabras) {
  palabras.sort(comparateAleatoria)
  palabras.splice(27)
  return palabras
}
function comparateAleatoria(){
  return Math.random() - 0.5
}
function buscarPalabrasPorDificultad(dificultad) {
  const filteredWords = words.find((wordSet) => wordSet.dificultad === dificultad);
  if (filteredWords) {
    return filteredWords.palabras;
  }
  return [];
}

export default {
  components: {
    Header,
    Footer,
    List,
    Board,
    Info,
    Fin
},
computed:{

},
data() {
    return {
      dificultadSeleccionada: null,
      activatePlay: false,
      showElement: false,
      timer: 60,
      showFin: false,
      words:[],
      selectedWordId:null,
      selectedCardId:null,
      exists:[],
      puntaje:0,
      totalVidas:4,
    };
  },
  watch: {
    dificultadSeleccionada: {
      immediate: true,
      handler(nuevaDificultad) {
        this.words = elegir21(buscarPalabrasPorDificultad(nuevaDificultad));
      },
    },
  },
  methods: {
    dificultadCambiada(dificultad) {
      this.dificultadSeleccionada = dificultad;
    },
    jugar(activar){
      this.activatePlay = activar
    },
    toggleVisibility(){
      this.showElement = !this.showElement
    },
    toggleVisibilityFin(){
      this.showFin = !this.showFin
      this.puntaje = 0
      this.totalVidas = 4
      //aplicar reinicio de contador y botones
    },
    tiempo(time){
      this.timer = time
    },
    showPanelFin(time){
      console.log(time)
      if(time === 0){
        this.showFin = true
      }
    },
    onWordSelected(wordId){
      this.selectedWordId = wordId
      if(this.selectedWordId === this.selectedCardId){
        this.exists.push(wordId)
        this.puntaje += 10
        this.selectedWordId = null
        this.selectedCardId = null
      }
      if(this.selectedWordId != this.selectedCardId && this.selectedCardId != null && this.selectedWordId != null){
        console.log(this.selectedWordId)
        console.log(this.selectedCardId)
        this.totalVidas--
        this.selectedWordId = null
        this.selectedCardId = null
        if(this.totalVidas <= 0)
          this.showFin = !this.showFin
      }
      //console.log(this.exists)
    },
    onCardSelect(cardId){
      this.selectedCardId = cardId
      if(this.selectedWordId === this.selectedCardId){
        this.exists.push(cardId)
        this.puntaje += 10
        this.selectedWordId = null
        this.selectedCardId = null
      }
      if(this.selectedWordId != this.selectedCardId && this.selectedWordId != null && this.selectedCardId != null){
        console.log(this.selectedWordId)
        console.log(this.selectedCardId)
        this.totalVidas--
        this.selectedWordId = null
        this.selectedCardId = null
        if(this.totalVidas <= 0)
          this.showFin = !this.showFin
      }
      //console.log(this.exists)
    },
    perder(){
      
    }
  }
}
</script>
<template>
  <section class="contPage">
    <div class="contenedor">
      <div class="center">

        <Header 
        @dificultadCambiada="dificultadCambiada" 
        @activarJuego="jugar" 
        :Puntos="puntaje"
        :life="totalVidas"
        @showAyuda="toggleVisibility"/>
      </div>
        <List :words="words" @wordSelected="onWordSelected" />
      <Board :words="words" @cardSelected="onCardSelect" :exists="exists"/>
      <Footer :time="timer" :activate="activatePlay" @fin="showPanelFin"/> <!--Se debe mandar el tiempo en segundos--> 
    </div>
  </section>
  <Info v-show="showElement" @click="toggleVisibility"></Info>
  <Fin v-show="showFin" @click="toggleVisibilityFin"></Fin>
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Monomaniac+One&family=Open+Sans:wght@300&family=Poiret+One&family=Roboto:ital,wght@0,100;0,300;0,500;1,100&display=swap');
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
  .contentFin{
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

.contenedor{
  position: relative;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 60px 1fr 40px;
  font-family: 'Roboto', sans-serif;
  /*background-color: rgba(150, 150, 250, 0.25);*/
}
.contPage{
  position: absolute;
}
.contenedor2{
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
.ayuda{
  width: 90vw;
  height: 82vh;
  display: flex;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  background-color: white;
  font-family: 'Roboto', sans-serif;
}
h1{
  font-size: 30px;
}
p{
  padding: 0px 20px;
  text-align: justify;
}
</style>