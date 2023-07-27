<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Barra de cuenta regresiva',
  props: {
    time: Number,
    activate:Boolean
  },

  data() {
    return {
      tiempoTotal: this.time,
      tiempoTranscurrido: 0,
      tiempoFaltante: this.time,
      porcentajeRestante:100,
      intervalId:null,
    };
  },
  created(){
    this.intervalId = setInterval(this.updateTiempo, 1000);
  },
  methods: {
    ...mapMutations(['changeShowFin']),
    updateTiempo(){
      if(this.tiempoTranscurrido >= this.tiempoTotal) {
        clearInterval(this.intervalId)
        this.tiempoTranscurrido = this.tiempoTotal
        this.changeShowFin(true);
      }else{
        this.tiempoTranscurrido++;
        this.tiempoFaltante = this.tiempoTotal - this.tiempoTranscurrido;
        const porcentajeTranscurrido = (this.tiempoTranscurrido / this.tiempoTotal) * 100
        this.porcentajeRestante = 100 - porcentajeTranscurrido;
      }
    },
  },
  computed:mapState(['timer','showFin'])
};
</script>
<template>
  <section class="container">
    <article class="container-bar">
      <div class="bar" />
      <div class="progress-bar" :style="{width:`${porcentajeRestante}%`}" />
    </article>
    <div>{{ tiempoFaltante }}</div>
  </section>
</template>
<style scoped>
.progress-bar{
  position: absolute;
  background-color: greenyellow;
  height: 20px;
  border-radius: 15px;
}
.bar{
  position: absolute;
  width: 100%;
  height: 20px;
  background-color: rgba(255, 0, 0, 0.438);
  border-radius: 15px;
}
.container-bar{
  position: relative;
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: start;
  align-items: center;
}
.container {
  display: grid;
  grid-template-columns: 80% 20%;
  justify-items: center;
  width: 100%;
  align-items: center;
}

</style>