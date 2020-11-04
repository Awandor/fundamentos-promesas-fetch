// ========================================
// Promise.race
// ========================================

const sumarLento = ( numero ) => {

  return new Promise( ( resolve, reject ) => {

    setTimeout( () => {

      resolve( numero + 1 );
      // reject( 'Falló sumarLento' );

    }, 800 );

  } );

};

const sumarRapido = ( numero ) => {

  return new Promise( ( resolve, reject ) => {

    setTimeout( () => resolve( numero + 1 ), 300 ); // Como resolve funciona como return lo puedo poner en una sola línea

  } );

};

const cosas = [ sumarLento( 5 ), sumarRapido( 10 ), true, 'cualquier cosa' ];

Promise.race( cosas ).then( respuesta => {

  console.log( 'Promise.all con varios tipos de cosas', respuesta );

} );
