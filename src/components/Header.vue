<script>

export default {
  components: {
  },
  props: {
    Puntos: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      Facil:false,
      Medio:false,
      Dificil:false,
      puntosdef:"0"
    };
  },
  methods:{
    ejecucion() {
      return true();
    },
  },
  created() {
    },
};
</script>
<template>
  <article class="header">
    <div class="menu">
      <div class="sec_izq">
        <div class="btn_opciones">
          <div>
            <div class="btn_ayuda btn_juego">
              <img src="./icons/question.svg" alt="" width="32" height="32">
            </div>
          </div>
          <div class="dificultad">
            <div class="btn_juego">
              <button class="facil">Facil</button>
            </div>
            <div class="btn_juego">
              <button class="medio">Medio</button>
            </div>
            <div class="btn_juego">
              <button class="dificil">Dificil</button>
            </div>
          </div>
        </div>
      </div>
      <div class="sec_cen">
        <div class="centro btn_juego">
          <button>JUGAR!!</button>
        </div>
      </div>
      <div class="sec_der">
        <label class="texto">La puntuacion es: 
        <h1 class="texto_puntaje">{{ this.puntosdef }} puntos</h1>
      </label>
      </div>
    </div>
  </article>
</template>
<style scoped>
.header{
  background-color: rgb(3, 117, 184);
}
.menu{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.sec_izq{
  display: block;
}
.sec_izq .btn_opciones {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  
}
.btn_opciones {
  display: block;
}
.btn_juego {
  display: block;
  padding: 2% 5%;
  
}
.dificultad{

  display: flex;
  justify-content: center;
}
.sec_cen .centro{
  text-align: center;
}
.sec_der{
  padding-right: 10%;
  text-align: right;
}

/*esta seccion poner el estilo de los textos (seccion roja)*/
.texto{ 
  color: white;
}
.texto_puntaje{ color: white;}

/*esta seccion poner el estilo de los botones (todos los botones)*/
.btn_juego button{
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 15%;
}

.btn_juego button:hover{
  background-color: rgb(255, 255, 255);
  color: #000;
  cursor: pointer;
}

/*seccion para modificar btn ayuda*/
.btn_ayuda svg{
  color: white;
}
.btn_ayuda svg:hover{
  cursor: pointer;
}
/*seccion para modificar btns dificultad*/
.dificultad .btn_juego .facil{
  background-color: rgb(97, 146, 24);
}
.dificultad .btn_juego .medio{
  background-color: rgb(255, 153, 0);
}
.dificultad .btn_juego .dificil{
  background-color: rgb(255, 71, 47);
}

.dificultad .btn_juego button:hover{
  background-color: rgb(255, 255, 255);
  color: #000;
  cursor: pointer;
}
/*seccion para modificar btn de jugar*/
.centro button{
  background-color: rgb(5, 39, 151);
  border-radius: 50%;
}
</style>