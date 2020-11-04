// ========================================
// Response.clone()
// ========================================


// Vamos a obtener los datos del usuario 1

fetch( 'https://reqres.in/api/users/1' ).then( resp => resp.json() ).then( usuario => {

  console.log( usuario );

} );


// Cambiamos la concatenación de promesas para hacer dos lecturas de resp

fetch( 'https://reqres.in/api/users/1' ).then( resp => {

  resp.json().then( usuario => {

    console.log( 'primera vez', usuario.data );

  } );

  //   Imaginemos que tenemos que volver a trabajar con la resp para por ejemplo guardarla en base de datos

  resp.json().then( usuario => {

    console.log( 'segunda vez', usuario.data ); // Da error, nos dice que no se puede leer el body dos veces

  } );

} );

// Existe un método para clonar la respuesta de la promesa, normalmente sólo se clona una y la otra se deja igual

fetch( 'https://reqres.in/api/users/1' ).then( resp => {

  resp.clone().json().then( usuario => {

    console.log( 'primera vez', usuario.data );

  } );

  //   Imaginemos que tenemos que volver a trabajar con la resp para por ejemplo guardarla en base de datos

  resp.json().then( usuario => {

    console.log( 'segunda vez', usuario.data ); // Da error, nos dice que no se puede leer el body dos veces

  } );

} );
