// ========================================
// Fetch API
// ========================================

fetch( 'https://reqres.in/api/users' ).then( resp => {

  console.log( resp ); // No vemos los datos, body tiene algo que se llama ReadableStream

  // Tenemos que pasar la respuesta por un método .json() que retorna una promesa

  /* resp.json().then( resp2 => {

    console.log( resp2 ); // Ahora sí tenemos data

  } ); */

  resp.json().then( console.log ); // Forma corta, como el argumento coincide con lo que se retorna resp2

} );

// Como estamos concatenando funciones que retornan promesas podemos hacerlo así

fetch( 'https://reqres.in/api/users' ).then( resp => resp.json() ).then( respObj => {

  console.log( respObj );

} );

// Con fetch podemos traer el código de cualquier página

/* fetch( 'https://wikipedia.org' ).then( resp => resp.text() ).then( html => {

  console.log( html );
  document.open();
  document.write( html );
  document.close();

  //   Necesitamos tener la extensión cors en el navegador y activarla para permitir cross domain access

} ); */

// Vamos a hacer un POST a https://reqres.in/api/users enviando datos

const usuario = {
  nombre: 'Dan',
  apellido: 'Häggblom'
};

fetch( 'https://reqres.in/api/users', {
  method: 'POST', // Puede ser PUT, DELETE
  body: JSON.stringify( usuario ), // Tenemos que convertir el objeto en un string
  headers: {
    'Content-Type': 'application/json'
  }
} ).then( resp => resp.json() ).then( respObj => {

  console.log( respObj );

} ).catch( console.error );
