//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "senati" -> "itanes"

const texto = "Senati";
const textoinvertido = texto.split("").reverse().join("");

console.log(textoinvertido);

//Crear una variable donde almacene una dirección de correo electrónico
//verificar si el correo es válido cuando tiene un solo @
//Ejemplo:
// jhon@gmail.com  [correctp]
// luis@gmail@.com [incorrecto]
// mariagmail.com  [incorrecto]
const correo = "jhon@gmail.com";
let cantidadArrobas = 0;

for (let i = 0; i < correo.length; i++){
  //Calcular cuántos @ encuentras...
  if (correo[i] === "@") {
    cantidadArrobas++;
  }
}

const esCorrecto = cantidadArrobas === 1;

console.log("Correo:", correo);
console.log("Cantidad de @:", cantidadArrobas);
console.log("¿Es correcto?:", esCorrecto);