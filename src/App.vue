<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import List from './components/List.vue'
import words from './assets/words'
import Board from './Panel/Board.vue'

function elegir21(palabras) {
  palabras.sort(comparateAleatoria)
  palabras.splice(27)
  // console.log(palabras)
  return palabras//.splice(0,21)
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
    Header, Footer, List, Board
  },data() {
    return {
      dificultadSeleccionada: null,
      activatePlay: false,
      showElement: false,
      timer: 60,
      showFin: false,
      words:[],
      selectedWordId:null,
      selectedCardId:null,
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
      console.log(wordId)
    },
    onCardSelect(cardId){
      this.selectedCardId = cardId
      console.log(cardId)
    }
  }
}
</script>
<template>
  <section class="contPage">
    <div class="contenedor">
      <Header @dificultadCambiada="dificultadCambiada" @activarJuego="jugar" @showAyuda="toggleVisibility"/>
      <List :words="words" @wordSelected="onWordSelected"/>
      <Board :words="words" @cardSelected="onCardSelect"/>
      <Footer :time="timer" :activate="activatePlay" @fin="showPanelFin"/> <!--Se debe mandar el tiempo en segundos--> 
    </div>
  </section>
  <section class="contenedor2" v-show="showElement" @click="toggleVisibility">
    <article class="ayuda" >
      <h1>INFORMACIÓN</h1>
      <p>El juego se basa en encontrar los pares, entre una imagen y su significado en ingles</p>
      <p>
        A este modo de juego es un fenómeno al cual se lo conoce como 
        <strong><em>ASIMILISACIÓN</em></strong>, es muy tratado en lingüistica
        donde una palabra toma significado de acuerto con un objeto en otro idioma, siendo
        de esta forma como conserva su significado original y se adapta al contexto 
        lingüistico de la persona incorporando de esta forma nuevos conceptos al propio
        lenguaje del individuo. Esta forma de asimilisación es conocida comúnmente como
        <b>"Aprendizaje de vocabulario mediante asociación"</b>.
      </p>
      <p>
        Este minijuego fue creado por:<br>
        <small>John Hilasaca - <strong>6608</strong></small><br>
        <small>Jhonnathan Castillo - <strong>6588</strong></small><br>
        <small>Wellington Cabezas - <strong>6683</strong></small><br>
        <small>Andre Yamada - <strong>6481</strong></small>
      </p>
    </article>
  </section>
  <section class="contenedor2" v-show="showFin" @click="toggleVisibilityFin">
    <article class="ayuda" >
      <h1>Fin del juego</h1>
      <p>Gracias por jugar</p>
      <img src="./assets/gameover.png" alt="" width="400">
      <p>Click en cualquier parte de la pantalla para volver a jugar</p>
    </article>
  </section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Monomaniac+One&family=Open+Sans:wght@300&family=Poiret+One&family=Roboto:ital,wght@0,100;0,300;0,500;1,100&display=swap');
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
