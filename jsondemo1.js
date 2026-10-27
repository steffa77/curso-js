//Se requieren tenga las claves:
//2 cadena
//2 numérico (entero, decimal)
// 1 null
// 1 lógica (false/true)
// 1 array (cadenas)
// 1 array (objetos)
// 1 objeto (arrays)

const pelicula = {
  titulo: "Cars 3",
  música: "Randy Newman",
  presupuesto: 175000000,
  recaudacion: 383930656,
  duracion: null,
  publico: true,
  genero: [ "Animacion",
    "Aventura",
    "Comedia",
    "Drama",
    "Fantasía",
    "Infantil",
    "Acción",
  ],

  reparto: [
    {actor: "Owen Wilson", personaje: "Rayo McQueen"},
    {actor: "Cristela Alonzo", personaje: "Cruz Ramirez"}
  ],

  fotografia: {
    nombre: ["Jeremy Lasky","Kim White","Michael Sparber"]
  },
};

console.log(pelicula.genero[pelicula.genero.length - 1])

console.log(pelicula.reparto[1].personaje)

console.log(pelicula.reparto[pelicula.reparto.length - 1].rol)

const nombre = pelicula.fotografia.nombre
nombre.forEach(nombre => {
  console.log(nombre)
});