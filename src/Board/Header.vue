<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      heart: 'https://www.svgrepo.com/show/525369/heart.svg',
      coin:'https://www.svgrepo.com/show/325876/coins.svg',
      btnPlay:'https://www.svgrepo.com/show/511104/play-circle.svg',
      btnPause:'https://www.svgrepo.com/show/511100/pause-circle.svg',
      btnQuest:'https://www.svgrepo.com/show/491697/question-circle.svg',
      btnReset:'https://www.svgrepo.com/show/501336/reset.svg',
      showBtn:false,
    };
  },
  methods: {
    ejecucion() {
      this.showBtn = !this.showBtn;
    },
    verInfo(){
      this.changeShowInfo(true);
    },
    ...mapMutations(['changeName','changeShowInfo','reset']),
  },
  computed: mapState(['name', 'difficulty','lifePlayer','coins','score','showInfo','IdCard','IdWord','listWords'])
};
</script>
<template>
  <section class="header">
    <article class="info">
      <div class="line1">
        <span>{{ name }}</span>
      </div>
      <div class="line2">
        <span><img class="icon imgInfo" :src="heart"> x{{ lifePlayer }}</span>
        <span><img class="icon imgInfo" :src="coin"> x{{ coins }}</span>
      </div>
      <div class="line3">
        <span>Puntaje: {{ score }}</span>
      </div>
    </article>
    <article class="play">
      <img class="iconPlay" :src="btnQuest" @click="verInfo">
      <img class="iconPlay" :src="btnReset" @click="reset">
    </article>
  </section>
</template>

<style scoped>
.imgInfo{
  margin-right: 5px;
}
.iconPlay{
  cursor: pointer;
  width: 50px;
}
.icon {
  width: 25px;
  height: 25px;
}
.line2{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.line3{
  display: flex;
  justify-content: space-around;
}
.line1{
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}
span{
  display: flex;
  align-items: center;
}
.play{
  display: flex;
  justify-content: space-around;
  width: 50%;
  height: 100%;
}
.info{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 100%;
}
.header{
  display: flex;
  background-color: #5d6fca7c;
  border-radius: 15px;
  width: 94%;
  height: 94%;
}

</style>