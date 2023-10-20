// Verificar a divisibilidade por 3 de números de 0 até 10000.

let i = 0

while(i < 10000) {
  if(i % 3 === 0) {
    console.log(`${i} é divisível por 3`)
  } else {
    console.log(`${i} não é divisível por 3`)
  }
  i++
}
