<!-- <script>

</script>
<template>
  <article class="footer">
    Componente donde se muestra una barra de tiempo sobrante, la barra
    muestra un porcentaje del tiempo faltante y el reloj de alado
    muestra el tiempo decreciendo, debe tener un prop para pasar el
    tiempo
  </article>
</template>
<style scoped>
.footer{
  background-color: rgba(248, 250, 150, 0.25);
}
</style> -->

<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: progress+'%', maxWidth: progressBarWidth }"></div>
    <div class="countdown">{{ formatTime(countdown) }}</div>
  </div>
  
</template>

<script>
export default {
  name: 'Barra de cuenta regresiva',
    components:{
      
    },
    props:{
      time:Number
    },
  mounted() {
    this.totaltime = this.time;
    this.startCountdown();
    this.setProgressBarWidth();
    window.addEventListener('resize', this.setProgressBarWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setProgressBarWidth);
  },
  methods: {
    startCountdown() {
      this.countdown=this.time;
      const interval = setInterval(() => {
        this.countdown--; // decrementar la cuenta regresiva
        this.progress = ((this.countdown) / (this.totaltime)) * parseInt(this.progressBarWidth); // calcular el porcentaje de progreso depediendo del porcentaje de la ventaja

        if (this.countdown === 0) {
          clearInterval(interval); // detener la cuenta regresiva cuando alcanza 0
        }
      }, 1000);
    },
    setProgressBarWidth() {
      const containerWidth = window.innerWidth - 20; // ancho del contenedor

      const percentage = (parseInt(this.progressBarWidth) / (containerWidth)) * 100; // obtener la diferencia entre la progressBarWidth y containerWidth
      this.progressBarWidth = Math.trunc(parseInt(this.progressBarWidth)-percentage) + '%'; // asignar la diferencia entre el procentaje de la progressBarWidth y el porcentaje

    },
    formatTime(time) {
      const minutes = Math.floor(time / 60).toString().padStart(2, '0'); // obtener los minutos en formato de dos dígitos
      const seconds = (time % 60).toString().padStart(2, '0'); // obtener los segundos en formato de dos dígitos
      return `${minutes}:${seconds}`;
    }
  },
  data() {
    return {
      countdown: null, // cuenta regresiva inicial
      totaltime: null, // tiempo total de la cuenta regresiva en segundos
      progress: 100  , // porcentaje de progreso inicial
      progressBarWidth: '100%' // ancho máximo de la barra de progreso
    };
  },
};
</script>

<style>
.progress-container {
  position: relative; /* Agregar posición relativa al contenedor */
  display: flex;
  align-items: center;
}

.progress-bar {
  /* flex: 1; */
  width: 0%;
  height: 20px;
  margin: 10px 0px 10px 20px;
  background-color: #4caf50;
  transition: width 0.5s;
}

.countdown {
  position: absolute; /* Agregar posición absoluta al div de la cuenta regresiva */
  right: 0px; /* Ajustar la posición a la derecha */
  margin: 10px 20px;
}
</style>