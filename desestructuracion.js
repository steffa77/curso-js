//Estrucuras = OBJETOS
//Desestructuras = ABRIR OBJETOS
const persona = {
  apellidos : "Garay Mendoza",
  nombres : "Steffano",
  edad : 19,
  skills: ["PHP", "Java", "Javascript", "SQL", "Python"]
}

//Guardar apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const nombres = persona.nombres
const edad = persona.edad
*/

//Desestructurar es separar datos provenientes de un objeto
//NOTA: No es necesario recuperar toda la colección
//NOTA: La variables deben coinciden con las claves
const { nombres, skills} = persona

console.log(nombres, skills)