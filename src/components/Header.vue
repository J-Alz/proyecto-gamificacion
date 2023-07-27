<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
  },
  props: {
    Puntos: Number,
    activate: Boolean,
    life:Number
  },
  data() {
    return {
      Facil: false,
      Medio: false,
      Dificil: false,
      isClickedFacil: false,
      isClickedMedio: false,
      isClickedAvanzado: false,
      verb:'JUGAR!!!',
      nombre:''
    };
  },
  methods: {
    ejecucion() {
      if(this.verb === 'JUGAR!!!'){
        this.$emit('ActivarJuego',true)
        this.verb = 'PAUSAR'
      }else{
        this.$emit('ActivarJuego',false)
        this.verb = 'JUGAR!!!'
      }
    },
    verAyuda(){
      this.$emit('showAyuda',true)
    }
    ,
    seleccionarDificultad(dificultad) {
      this.dificultadSeleccionada = dificultad;
      this.$emit('dificultadCambiada', this.dificultadSeleccionada);
      if ( dificultad === 'Facil'){
        this.isClickedFacil = true;
        this.isClickedMedio = false;
        this.isClickedAvanzado = false;
      }
      if ( dificultad === 'Medio'){
        this.isClickedMedio = true;
        this.isClickedFacil = false;
        this.isClickedAvanzado = false;
      }
      if ( dificultad === 'Avanzado'){
        this.isClickedAvanzado = !this.isClickedAvanzado;
        this.isClickedFacil = false;
        this.isClickedMedio = false;
      }
    },
    ...mapMutations(['changeName']),
    actualizarNombre(){
      this.changeName(this.nombre);
      this.nombre = '';
    }
  },
  created() {
  },
  computed: mapState(['name','difficulty'])
};
</script>
<template>
  <section class="header">
    <article class="header-opcion">
      <span class="ayuda" @click="verAyuda">
        {{ name }}{{ difficulty }}
        <img src="./icons/question.svg" alt="" width="32" height="32">
      </span>
    </article>
    <article class="header-centro">
      <div class="centrar">
        <button class="btn centro" @click="ejecucion">{{ verb }}</button>
      </div>
      <div class="centrar">
        <button class="btn facil" :class="{'clicked': isClickedFacil}" @click="seleccionarDificultad('Facil')">Facil</button>
    <button class="btn medio" :class="{'clicked': isClickedMedio}" @click="seleccionarDificultad('Medio')">Medio</button>
    <button class="btn dificil" :class="{'clicked': isClickedAvanzado}" @click="seleccionarDificultad('Avanzado')">Díficil</button>
  </div>
    </article>
    <article class="centrar">
      <div class="apilar">
        <span class="">VIDAS RESTANTES</span>
        <span>
          <img class="icon" src="https://www.svgrepo.com/show/503037/heart.svg" alt="" width="25" height="25">
          x{{ life }}
        </span>
      </div>
      <div class="apilar">
        <span>La puntuación es: </span>
        <span>{{ Puntos }} puntos</span>
      </div>
    </article>
  </section>
</template>

<style scoped>
.header {
  background-color: rgb(3, 117, 184);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.header-centro{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.centrar{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  color: white;
}
.btn{
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 10px;
  margin: 0;
  border: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}
.btn:hover{
  background-color: rgba(126, 126, 126, 0.733);
  border: 1px solid black;
}
.centro{
  background-color: rgb(5, 39, 151);
  color: white;
}
.facil{
  background-color: rgb(97, 146, 24);
  color: white;
}
.medio{
  background-color: rgb(255, 153, 0);
  color: white;
}
.dificil{
  background-color: rgb(255, 71, 47);
  color: white;
}
.header-opcion{
  display: flex;
  justify-content: space-around;
}
.ayuda{
  cursor: pointer;
}
.ayuda:hover{
  filter: invert(100%);
}
.apilar{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
span{
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon{
  filter: invert(100%);
}

.clicked{
  background-color: rgba(126, 126, 126, 0.733);
  border: 1px solid black;
}

</style>