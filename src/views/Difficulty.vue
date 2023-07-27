<script>
import { mapState, mapMutations } from 'vuex'
import { RouterLink } from 'vue-router';
import words from '../assets/words.js';

function shuffleArray(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function getElementsRamdon(lista, cantidad){
  if(cantidad > lista.length){
    console.log("mayor numero de elementos")
    return []
  }
  const listaMezclada = shuffleArray([...lista]);
  return listaMezclada.slice(0,cantidad);
}

export default{
  data(){
    return{
    }
  },
  methods:{
    ...mapMutations(['changeDifficulty','changeListWords']),
    easyDifficulty(){
      this.changeDifficulty('Facil');
      this.changeListWords(getElementsRamdon(words[0].palabras,20));
      console.log(this.listWords);
    },
    mediumDifficulty(){
      this.changeDifficulty('Medio');
      this.changeListWords(getElementsRamdon(words[1].palabras,20));
      console.log(this.listWords);
    },
    hardDifficulty(){
      this.changeDifficulty('Avanzado');
      this.changeListWords(getElementsRamdon(words[2].palabras,20));
      console.log(this.listWords);
    }
  },
  computed: mapState(['name','listWords'])
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