import words from './words'
export function elegir21(palabras) {
  palabras.sort(comparateAleatoria)
  console.log(palabras.splice(21))
  return palabras//.splice(0,21)
}
function comparateAleatoria(){
  return Math.random() - 0.5
}

//elegir21Palabras(words)