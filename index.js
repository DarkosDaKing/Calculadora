const matematicas = require("./operacionesMate.js");

function parseador() {
  return {
    primerNum: 78,
    segundoNum: 45,
    operador: "-",
  };
}

function ejecutador(objetoOperacion) {
  const operacionesPosibles = {
    "+": matematicas.suma,
    "-": matematicas.restar,
    "/": matematicas.dividir,
    "*": matematicas.multiplicar,
  };
  const operador = operacionesPosibles[objetoOperacion.operador];
  return operador(objetoOperacion.primerNum, objetoOperacion.segundoNum);
}

function main() {
  const operacionParseada = parseador();
  const resultado = ejecutador(operacionParseada);
  console.log(resultado);
}
main();
