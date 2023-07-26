<template>
  <section class="contenedor2">
    <article class="ayuda" >
      <h1>Fin del juego</h1>
      <p>Gracias por jugar</p>
      <img src="./assets/gameover.png" alt="" width="400">
      <p>Click en cualquier parte de la pantalla para volver a jugar</p>
    </article>
  </section>
</template>
<style scoped>
.contenedor2{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(76, 233, 76, 0.25);
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  z-index: 1;
}
.ayuda{
  width: 90vw;
  height: 82vh;
  display: flex;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  background-color: white;
  font-family: 'Roboto', sans-serif;
}
</style>