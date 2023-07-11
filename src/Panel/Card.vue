<script>
export default{
  props:{
    id:Number,
    palabra:String,
    significado:String,
    url:String,
  },
  data(){
    return{
      //int de componente
      isActive: false,
    }
  },
  methods:{
    //comprobar funcionamiento
    checkActive(){
      this.isActive = !this.isActive
    }
  }
}
</script>

<template>
  <article class="box">
    <div class="box-card">
      <img :src="url" :alt="palabra" :id="id" :title="palabra">
      <div @click="checkActive" class="card-shadow" :class="{ }"></div>
    </div>
  </article>
</template>

<style scoped>
.box{
  display: flex;
  justify-content: center;
}
.box-card{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 110px;
  width: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}
.card-shadow{
  height: 110px;
  width: 100px;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
}
.card-shadow:hover{
  cursor: pointer;
  background-color: rgba(253, 124, 124, 0.8);
}
img{
  position: absolute;
  height: 100px;
  width: 90px;
  border-radius: 10px; 
}

</style>