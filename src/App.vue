<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import List from './components/List.vue'
import Panel from './Panel/Panel.vue'

export default {
  components: {
    Header, Footer, List, Panel
  }
}
</script>
<template>
  <section class="contenedor">
    <Header />
    <List />
    <Panel />
    <Footer 
    :time="600"/> <!--Se debe mandar el tiempo en segundos--> 
  </section>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Monomaniac+One&family=Open+Sans:wght@300&family=Poiret+One&family=Roboto:ital,wght@0,100;0,300;0,500;1,100&display=swap');
.contenedor{
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 50px 1fr 50px;
  font-family: 'Roboto', sans-serif;
  /*background-color: rgba(150, 150, 250, 0.25);*/
}
</style>
