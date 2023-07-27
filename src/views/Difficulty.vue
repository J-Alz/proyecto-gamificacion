<script>
import { mapState, mapMutations } from 'vuex'
import { RouterLink } from 'vue-router';
export default{
  data(){
    return{
    }
  },
  methods:{
    ...mapMutations(['changeDifficulty']),
    easyDifficulty(){
      this.changeDifficulty('Facil');
    },
    mediumDifficulty(){
      this.changeDifficulty('Medio');
    },
    hardDifficulty(){
      this.changeDifficulty('Avanzado');
    }
  },
  computed: mapState(['name'])
}
</script>
<template>
  <section class="content">
    <article class="contentLogin">
      <span class="title">Bienvenido </span>
      <span><u>{{ name }}</u></span>
      Seleccione la dificultad
      <div class="contentBtn">
        <RouterLink to="/board">
          <button class="green" @click="easyDifficulty">Fácil</button>
        </RouterLink>
        <RouterLink to="/board">
          <button class="yellow" @click="mediumDifficulty">Media</button>
        </RouterLink>
        <RouterLink to="/board">
          <button class="red" @click="hardDifficulty">Díficil</button>
        </RouterLink>
      </div>
    </article>
  </section>
</template>
<style scoped>
button:hover{
  background-color: #FFE4C5;
}
.green{background-color: greenyellow;}
.yellow{background-color: yellow;}
.red{background-color: red;}
button{
  width: 120px;
  cursor: pointer;
  padding: 5px 40px;
  border-radius: 10px;
  border: 0;
  background-color:  #D18466;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Audiowide', cursive;
}
.contentBtn{
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.title{
  font-size: 30px;
}
.contentLogin{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  min-width: 280px;
  height: 70%;
  background-color: #5d6fca7c;
  border-radius: 15px;
}
.content{
  width: 100vw;
  height: 100vh;
  /*background-image: url('../assets/fondo.jpg');*/
  font-family: 'Audiowide', cursive;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>