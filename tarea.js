// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.dev/api/people/1/
 Imprima en consola el nombre y género de la persona.
*/

// Resolución de la tarea #1

fetch( 'https://swapi.dev/api/people/1/' ).then( resp => {

  console.log( resp );

  if ( resp.ok ) {

    return resp.json(); // retorna una promesa

  } else {

    throw new Error( 'Error en la petición' );

  }

} ).then( resp => {

  console.log( 'Nombre', resp.name );

  console.log( 'Género', resp.gender );

} ).catch( error => {

  console.log( error );

} );




// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.dev/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/

// Resolución de la tarea #2

fetch( 'https://swapi.dev/api/people/1/' ).then( resp => {

    console.log( resp );

    if ( resp.ok ) {

      return resp.json(); // retorna una promesa

    } else {

      throw new Error( 'Error en la petición' );

    }

  } )
  .then( resp => {

    console.log( 'Nombre', resp.name );

    console.log( 'Género', resp.gender );

    const usuario = {
      nombre: resp.name,
      genero: resp.gender
    };

    // Retornamos fetch() que es una promesa

    return fetch( 'https://reqres.in/api/users', {
      method: 'POST', // Puede ser PUT, DELETE
      body: JSON.stringify( usuario ), // Tenemos que convertir el objeto en un string
      headers: {
        'Content-Type': 'application/json'
      }
    } );

  } )
  .then( resp => {

    console.log( resp );

    // Retornamos resp.json() que es una promesa

    return resp.json();

  } )
  .then( respObj => {

    console.log( respObj );

  } )
  .catch( error => {

    console.log( error );

  } );


//   Podemos refactorizar de esta manera

const postData = ( persona ) => {

  const usuario = {
    nombre: persona.name,
    genero: persona.gender
  };

  // Retornamos fetch() que es una promesa

  return fetch( 'https://reqres.in/api/users', {
    method: 'POST', // Puede ser PUT, DELETE
    body: JSON.stringify( usuario ), // Tenemos que convertir el objeto en un string
    headers: {
      'Content-Type': 'application/json'
    }
  } );

}

fetch( 'https://swapi.dev/api/people/1/' ).then( resp => {

    if ( resp.ok ) {

      return resp.json(); // retorna una promesa

    } else {

      throw new Error( 'Error en la petición' );

    }

  } )
  .then( resp => {

    return postData( resp );

  } )
  .then( resp => {

    return resp.json();

  } )
  .then( respObj => {

    console.log( 'Refactorizado', respObj );

  } )
  .catch( error => {

    console.log( error );

  } );
