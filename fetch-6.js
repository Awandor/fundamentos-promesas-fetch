// ========================================
// Leer archivos HTML
// ========================================

fetch( 'no-encontrado.html' ).then( resp => resp.text() ).then( html => {

  console.log( html );

  const body = document.querySelector( 'body' );

  body.innerHTML = html;

} ).catch( error => {

  console.log( 'Error en la petición'.error );

} );
