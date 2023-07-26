<script>
import { RouterLink } from 'vue-router';
export default{
  components:{
    RouterLink,
  },
  data(){
    return{
      inputValue:'',
      hasInput:false,
    }
  },
  methods:{
    checkInput(){
      this.hasInput = this.inputValue.trim().length > 4;
      console.log(this.hasInput)
    },
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
        <RouterLink class="btn" to="/board">
          <button :disabled="!hasInput">Ingresar</button>
        </RouterLink>
      </form>
    </article>
  </section>
</template>
<style scoped>
.azul{color: #26326E;}
.azul-claro{color: #5D6FCA;}
.orange{color: #D18466;}
.orange-claro{color: #FFE4C5;}
.rosa{color: #A542AB;}
.rosa-claro{color: #E07BE1;}
button:hover{
  background-color: #FFE4C5;
}
button{
  cursor: pointer;
  padding: 5px 40px;
  border-radius: 10px;
  border: 0;
  background-color:  #D18466;
}
button{
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
  background-image: url('../assets/fondo.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
