import words from './words'
export function elegir21(palabras) {
  palabras.sort(comparateAleatoria)
  palabras.splice(27)
  // console.log(palabras)
  return palabras//.splice(0,21)
}
function comparateAleatoria(){
  return Math.random() - 0.5
}
export function buscarPalabrasPorDificultad(dificultad) {
  const filteredWords = words.find((wordSet) => wordSet.dificultad === dificultad);
  if (filteredWords) {
    return filteredWords.palabras;
  }
  return [];
}

//elegir21Palabras(words)