// Declaração da função. Ela recebe um parâmetro chamado ano
function calcularAnoBissexto(ano) {
  if (ano % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
// Aqui realizamos uma série de testes para verificar se os anos são bissextos
console.log(calcularAnoBissexto(0)); // Retorna true, mas deveria retornar false
console.log(calcularAnoBissexto(4)); // Deve retornar true
console.log(calcularAnoBissexto(100)); // Retorna true, mas deveria retornar false
console.log(calcularAnoBissexto(400)); // Deve retornar true
console.log(calcularAnoBissexto(800)); // Deve retornar true
console.log(calcularAnoBissexto(2020)); // Retorna true! Correto
console.log(calcularAnoBissexto(2021)); // Retorna false! Correto
