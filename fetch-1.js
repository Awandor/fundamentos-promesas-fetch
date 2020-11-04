console.log( 'Hola mundo' );

// Vamos a hacer una XMLHttpRequest o AJAX con js clásico

const request = new XMLHttpRequest();

request.open( "GET", "https://reqres.in/api/users", true );

request.send();

request.onreadystatechange = ( state ) => {

  console.log( request );

  if ( request.readyState === 4 ) {

    const resp = request.response; // es un string, no es un objeto así que lo transformamos

    const respObj = JSON.parse( resp );

    console.log( respObj );
  }

};

/* request.onload = function() {
  console.log( request.responseText );
}; */
