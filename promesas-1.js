// console.log( 'Hola mundo' );

/* function sumarUno( numero ) {

  return numero + 1;

} */

// console.log( sumarUno( 5 ) );

// Ahora vamos a simular que la función es asíncrona y que tarda en retornar 

function sumarUno( numero ) {

  setTimeout( function() {

    return numero + 1;

  }, 800 );

}

console.log( sumarUno( 5 ) ); // Retorna undefined porque toda función que no retorna algo explícito retorna undefined

// Si queremos que retorne el nuevo valor 6 tenemos que usar un callback function que se va a ejecutar después de 800 milisegundos

function sumarDos( numero, callback ) {

  setTimeout( function() {

    callback( numero + 2 );

  }, 800 );

}

sumarDos( 5, function( nuevoValor ) {

  console.log( nuevoValor );

} );

// Ahora vamos a ver que ocurre cuando queremos volver a ejecutar sumarDos dentro

sumarDos( 5, function( nuevoValor ) {

  // console.log( nuevoValor );

  sumarDos( nuevoValor, function( nuevoValor2 ) {

    console.log( nuevoValor2 );

  } );

} );

// Ahora vamos a ejecutar sumarDos por tercera vez

sumarDos( 5, function( nuevoValor ) {

  sumarDos( nuevoValor, function( nuevoValor2 ) {

    sumarDos( nuevoValor2, function( nuevoValor3 ) {

      console.log( nuevoValor3 );

    } );

  } );

} );


// Ahora vamos a complicar más con una validación

function sumarTres( numero, callback ) {

  if ( numero >= 11 ) {

    callback( 'Número muy alto' );

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
