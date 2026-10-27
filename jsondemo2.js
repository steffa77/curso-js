//Paso 1: Función asincrona (tiempos distintos/diferidos) - Latencia
async function obtenerPersonaje(id){

  //Paso 2: URL (endpoint)
  const API_URL = 'https://dragonball-api.com/api/characters/1'

  //Paso 3: App es propensa a errores...
  try{

    //Paso 4: Realizar la petición
    const respuesta = await fetch(API_URL)

    //Paso 5: ¿Existe una respuesta?
    if (!respuesta.ok){
      throw new Error(`No hay comunicación con el servidor`) //¡Stop!
    }

    //Paso 6: Si llegamos hasta aqui, entonces hemos recibido los datos (JSON)
    //JSON (cadena) > OBJECT JS
    const datos = await respuesta.json()

    //Paso 7
    //console.log(datos)

    //Mostrar solo el nombre de las transformaciones
    const transformaciones = datos.transformations
    transformaciones.forEach(transformacion => {
      console.log(transformacion.name)
    });

  }catch(e){
    console.error(`No se pudo concretar la operación: ${e}`)
  }

} //fin función obtenerPersonaje()

//TEST
//Debemos pasar el ID del personaje
obtenerPersonaje(1)