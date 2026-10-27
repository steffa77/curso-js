//Crea una función que reciba el ID del planeta, haga uso del API Dragon Ball
//y retorne una lista de personajes (name - race - affiliation). Ejemplo:
async function IDplaneta(){

  const API_URL = 'https://dragonball-api.com/api/planets/1'

  try{
    const mensaje = await fetch(API_URL)

    if(!mensaje.ok){
      throw new Error(`No hay comunicación con el servidor`)
    }

    const datos = await mensaje.json()

    const planetas = datos.characters
    planetas.forEach(planeta => {
      console.log(planeta.name.race.affiliation)
      console.log(planeta.race)
      console.log(planeta.affiliation)
     });

  }catch(error){
    console.error(`No funciona: ${error}`)
  }
}

IDplaneta()