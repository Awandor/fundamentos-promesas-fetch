// ========================================
// Promise.all
// ========================================

const sumarLento = ( numero ) => {

  return new Promise( ( resolve, reject ) => {

    setTimeout( () => {

      resolve( numero + 1 );
      // reject( 'Falló sumarLento' );

    }, 800 );

  } );

};

sumarLento( 5 ).then( resp => {

  console.log( 'sumarLento', resp );

} );



const sumarRapido = ( numero ) => {

  return new Promise( ( resolve, reject ) => {

    setTimeout( () => resolve( numero + 1 ), 300 ); // Como resolve funciona como return lo puedo poner en una sola línea

  } );

};

sumarRapido( 10 ).then( resp => {

  console.log( 'sumarRapido', resp );

} );

// Ahora vamos a usar Promise.all para concatenar varias funciones que retornan promesas mediante un arreglo

Promise.all( [ sumarLento( 5 ), sumarRapido( 10 ) ] ).then( respuestas => {

  console.log( 'Promise.all', respuestas ); // respuestas es un arreglo de resultados en el MISMO ORDEN en que se declararon

  // Aunque sumarRapido se resuelve antes que sumarLento su valor saldrá en segundo lugar en el arreglo

} ).catch( err => {

  console.log( 'Promise.all', err );

} );

// Con Promise.all si una sóla promesa falla, toda la ejecución de promesas falla


// Promise.all puede recibir cualquier cosa en su array de argumentos, no solo promesas

const miFuncion = () => 'resultado de mi función';

const cosas = [ sumarLento( 5 ), sumarRapido( 10 ), true, 'cualquier cosa', miFuncion() ];

Promise.all( cosas ).then( respuestas => {

  console.log( 'Promise.all con varios tipos de cosas', respuestas );

} );
