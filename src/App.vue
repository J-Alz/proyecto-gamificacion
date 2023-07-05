<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import List from './components/List.vue'
import Panel from './components/Panel.vue'

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
<style scoped>
.contenedor{
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 50px 1fr 50px;

  /*background-color: rgba(150, 150, 250, 0.25);*/
}
</style>
