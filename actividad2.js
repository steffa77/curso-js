//Crear un objeto que almacena datos de una mascota
//desestructurar utilizando un minimo de 4 variables
//mostrar en consola.
const mascota = {
    nombre: "Enzo",
    especie: "Perro",
    edad: 3,
    color: "Marrón",
    raza: "Labrador",
    peso: 12.5,
    sexo: "Macho",
    nombreDueño: "Carlos",
    vacunado: true,
    comidaFavorita: "Pollo"
};

const{
    nombre,
    especie,
    edad,
    color,
    raza,
    peso,
    sexo,
    nombreDueño,
    vacunado,
    comidaFavorita
} = mascota

console.log("Nombre:", nombre)
console.log("Especie:", especie)
console.log("Edad:", edad)
console.log("Color:", color)
console.log("Raza:", raza)
console.log("Peso:", peso)
console.log("Sexo:", sexo)
console.log("Nombre del dueño:", nombreDueño)
console.log("¿Está vacunado?:", vacunado)
console.log("Comida favorita:", comidaFavorita)