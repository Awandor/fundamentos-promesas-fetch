// ========================================
// BLOB
// ========================================

// Los BLOB o Binary Large Objects son objetos binarios de gran tamaño, como las imágenes o los archivos de audio

const imgElement = document.querySelector( 'img' );

// blob es un método que retorna una promesa
fetch( 'img/superman.png' ).then( resp => resp.blob() ).then( imagen => {

  console.log( imagen );

  const imgPath = URL.createObjectURL( imagen ); // URL es un objeto de js con el que podemos crear urls entre otras cosas

  imgElement.src = imgPath;

  // Se inyecta la url en el elemento <img> si la inspeccionamos vemos que el src no es la imagen de superman.png, es un blob

  // que puede almacenarse en caché para ser leído en otro momento y sin conexión a internet

} );
