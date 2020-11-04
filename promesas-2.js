// Ahora vamos a complicar más con una validación

function sumarTres( numero, callback ) {

  if ( numero >= 11 ) {

    callback( 'sumarTres: Número muy alto' );

    return;

  }

  // ¿Cómo voy a saber que el callback resuelve con error o correctamente si el primer argumento es el resultado?

  // La solución más conveniente es que si hay un error en el callback el primer argumento es el error, si no los siguientes argumentos son la respuesta

  setTimeout( function() {

    callback( null, numero + 3 ); // no hay error luego pasamos null como primer argumento

  }, 800 );

}

// Ahora en cada callback hay que revisar si viene un error

sumarTres( 5, function( error, nuevoValor ) {

  if ( error ) {

    console.log( error );

    return; // No continuar

  }

  sumarTres( nuevoValor, function( error, nuevoValor2 ) {

    if ( error ) {

      console.log( error );

      return; // No continuar

    }

    sumarTres( nuevoValor2, function( error, nuevoValor3 ) {

      if ( error ) {

        console.log( error );

        return; // No continuar

      }

      console.log( 'Sumar 3 a 5 tres veces:', nuevoValor3 );

    } );

  } );

} );

// Esto es lo que se conoce como Callback hell

// Vamos a resolver el asunto transformando nuestra función principal en una función que retorne una promesa

function sumarUno( numero ) {

  const promesa = new Promise( function( resolve, reject ) {

    setTimeout( function() {

      resolve( numero + 1 );

    }, 800 );

  } );

  return promesa;

}

// Invocamos la función que retorna una promesa, cuando la promesa se resuelve se ejecuta then con un callback con argumento la respuesta

sumarUno( 5 ).then( function( resp ) {

  console.log( resp );

} );

// Ahora vamos a aplicar sumarUno dos veces seguidas

sumarUno( 5 ).then( resp => {

  sumarUno( resp ).then( resp2 => {

    console.log( 'sumarUno x 2', resp2 );

  } );

} );

// Pero vemos que estamos volviendo a anidar mucho código, podemos concatenar de esta manera

sumarUno( 5 ).then( resp => {

  console.log( resp );

  return sumarUno( resp );

} ).then( resp => {

  console.log( 'sumarUno x 2', resp );

} );

// Como ejercicio vamos a aplicar sumarUno tres veces usando promesas encadenadas

sumarUno( 5 ).then( resp => {

  return sumarUno( resp );

} ).then( resp => {

  return sumarUno( resp );

} ).then( resp => {

  console.log( 'sumarUno x 3', resp );

} );

// Cuando trabajamos de esta manera encadenando promesas los then retornan promesas

// Podemos simplificar las funciones flechas que retornan valores de esta manera

sumarUno( 5 ).then( resp => sumarUno( resp ) ).then( resp => sumarUno( resp ) ).then( resp => {

  console.log( 'sumarUno x 3', resp );

} );

// Podemos simplificar aún más cuando el argumento de la función flecha coincide con el argumento que se retorna

sumarUno( 5 ).then( sumarUno ).then( sumarUno ).then( resp => {

  console.log( 'sumarUno x 3', resp );

} );

// ========================================
// Manejo de errores
// ========================================

function sumarDos( numero ) {

  const promesa = new Promise( function( resolve, reject ) {

    if ( numero >= 8 ) {

      reject( 'sumarDos x 3: Número muy alto' ); // reject hace que la ejecución salga de la función

    }

    setTimeout( function() {

      resolve( numero + 2 );

    }, 800 );

  } );

  return promesa;

}

// Usamos catch para atrapar el error

sumarDos( 5 ).then( sumarDos ).then( sumarDos ).then( resp => {

  console.log( 'sumarDos x 3', resp );

} ).catch( err => {

  console.log( err );

} );
