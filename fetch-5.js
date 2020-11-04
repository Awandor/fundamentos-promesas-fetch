// ========================================
// Manejo de respuestas y errores
// ========================================

fetch( 'https://reqres.in/api/users/1' ).then( resp => {

  resp.json().then( usuario => {

    console.log( usuario.data );

  } );

} ).catch( error => {

  console.log( 'Error en la petición', error );

} );

// Esto detecta un error de por ejemplo url, pero si el usuario no existe, la api funciona pero devuelve un ok: false

fetch( 'https://reqres.in/api/users/10000' ).then( resp => {

  console.log( resp ); // ok: false, status: 404

  if ( resp.ok ) {

    resp.json().then( usuario => {

      console.log( usuario.data );

    } );

  } else {

    // console.log( 'El usuario no existe' );

    throw new Error( 'El usuario no existe' ); // Así el catch sí detecta el error

  }

} ).catch( error => {

  console.log( 'Error en la petición', error );

} );


// Podemos refactorizar de esta manera

fetch( 'https://reqres.in/api/users/10000' ).then( resp => {

  console.log( resp ); // ok: false, status: 404

  if ( resp.ok ) {

    return resp.json();

  } else {

    throw new Error( 'El usuario no existe' );

  }

} ).then( usuario => {

  console.log( usuario.data );

} ).catch( error => {

  console.log( 'Error en la petición', error );

} );
