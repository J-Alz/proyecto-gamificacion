<script>
import { RouterLink } from 'vue-router';
import { mapMutations } from 'vuex'
export default{
  components:{
    RouterLink,
  },
  data(){
    return{
      inputValue:'',
      hasInput:false,
      inputSmall:true,
    }
  },
  methods:{
    checkInput(){
      this.hasInput = this.inputValue.trim().length > 4;
      this.inputSmall = !(this.inputValue.trim().length < 5 && this.inputValue.trim().length > 0);
      console.log(this.inputSmall)
    },
    ...mapMutations(['changeName']),
    actualizarNombre(){
      this.changeName(this.inputValue);
      this.inputValue = ''
    }
  }
}

</script>
<template>
  <section class="contentHome">
    <article class="contentLogin">
      <form class="formLogin">
        <h1>FindWord</h1>
        <label>--- Nombre ---</label>
        <input type="text" v-model="inputValue" @input="checkInput">
        <span class="error" :hidden="inputSmall"><small>El nombre debe tener 5 caracteres</small></span>
        <RouterLink class="btn" to="/difficulty">
          <button :disabled="!hasInput" @click="actualizarNombre">Ingresar</button>
        </RouterLink>
      </form>
    </article>
  </section>
</template>
<style scoped>
.error{
  color: red;
  font-weight: lighter;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
}
button:hover{
  background-color: #FFE4C5;
}
button{
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
input:focus{
  border: 0;
  background-color: #ffffff;
  outline: none;
}
input{
  border-radius: 10px;
  border: 0;
  padding: 5px 20px;
  background-color: #ffffffc9;
  font-family: 'Audiowide', cursive;
  font-size: 15px;
}
label{
  font-size: 17px;
  color: white;
}
h1{
  margin: 0;
  font-size: 30px;
}
.formLogin{
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.contentLogin{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  min-width: 280px;
  height: 70%;
  background-color: #5d6fca7c;
  border-radius: 15px;
}
.contentHome{
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
