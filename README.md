# Fundamentos para desarrollar PWAs

1. Promesas

2. Promesas en cadena

3. Promise.all

4. Promise.race

5. Fetch API

6. Get

7. Post

8. Fetch de Blobs

9. http-server


## http-server

Empezamos creando un index.html

Si no tenemos instalado http-server lo instalamos. Es un paquete que permite levantar rápidamente un servidor

> `npm install http-server -g` Hay que tener permisos de Administrador en la consola

Tiene varias opciones que pueden verse > `http-server --help`

Lo necesitamos para poder usar el protocolo `http` en el navegador y no el protocolo `file`

Desde la raiz del proyecto levantamos el servidor local > `http-server -o` -o lo abre automáticamente en el navegador

Tenemos que usar siempre `http://127.0.0.1:8080` 127.0.0.1 equivale a localhost. Una PWA sólo puede correr desde `localhost` o desde un `https://`
porque los service workers sólo pueden funcionar en entornos seguros y localhost se considera seguro

Si el puerto 8080 estuviera ocupado podemos asignar otro puerto > `http-server -o -p 8081`


## Origen de las promesas: Callback hell

Creamos archivo `promesas-1.js`

Ponemos `console.log('Hola mundo');`

Ahora vamos a comprobar que tenemos node y podemos correr el archivo, en otra consola > `node prom-1.js`

Vemos en consola `Hola mundo`

Ahora creamos una función asíncrona que realiza una suma y lo vamos complicando hasta alcanzar el Callback hell


## Promesas

Vamos a resolver el ejercicio de `promesas-1.js` con promesas

Creamos archivo `promesas-2.js`

Vamos a resolver el asunto transformando nuestra función principal en una función que retorne una promesa.

Invocamos la función que retorna una promesa, cuando la promesa se resuelve se ejecuta then con un callback con argumento la respuesta.

Cuando trabajamos encadenando promesas los then retornan promesas.


## Promise.all

Creamos archivo `promesas-3.js`

Vamos a usar `Promise.all` para concatenar varias funciones que retornan promesas mediante un arreglo.

La respuesta es un arreglo de resultados en el MISMO ORDEN en que se declararon.

`Promise.all` puede recibir cualquier cosa en su array de argumentos, no solo promesas.

Con `Promise.all` si una sóla promesa falla, toda la ejecución de promesas falla.


## Promise.race

Creamos archivo `promesas-4.js`

`Promise.race` funciona de manera similar a `Promise.all` pero en vez de retornar un arreglo de valores retorna un único valor, el valor
que se resuelva más rápidamente, si dos se resuelven al mismo tiempo retornará el que esté más a la izquierda en la declaración de argumentos.

Con `Promise.race` si la promesa más rápida falla, toda la ejecución de promesas falla, pero si la más rápida no falla no importa que otras fallen
pues ya tiene una valor para retornar.


## Fetch API

Creamos archivo `fetch-1.js`

Para trabajar con `fetch` necesitamos hacerlo desde `index.html`, ahí importamos `fetch-1.js`

Levantamos nuestro servidor > `http-server -o`

Vamos a `https://reqres.in/` es una Rest-API que nos permite hacer peticiones XMLHttpRequest o AJAX (Asynchronous JavaScript And XML)

Creamos una petición GET con js clásico XMLHttpRequest

Ahora creamos archivo `fetch-2.js` donde resolvemos lo mismo con fetch y cambiamos `index.html`, ahí importamos `fetch-2.js`

Creamos una petición POST con fetch enviando los datos en un body


## Blob

Creamos archivo `fetch-3.js` y cambiamos `index.html`, ahí importamos `fetch-3.js`

Los BLOB o Binary Large Objects son objetos binarios de gran tamaño, como las imágenes o los archivos de audio que pueden almacenarse
en caché o en bases de datos


## Response.clone()

Creamos archivo `fetch-4.js` y cambiamos `index.html`, ahí importamos `fetch-4.js`

Cuando recibimos una respuesta de la promesa que retorna fetch sólo podemos hacerla pasar por .json() una vez, si necesitamos hacerlo más de
una vez podemos clonar la respuesta y así no da error


## Manejo de respuestas y errores

Creamos archivo `fetch-5.js` y cambiamos `index.html`, ahí importamos `fetch-5.js`

catch detecta un error de por ejemplo url, pero si el usuario no existe, la api funciona pero devuelve un ok: false y catch no salta, podemos
comprobar si ok === false entonces throw new Error() esto sí lo detecta el catch


## Leer archivos HTML

Creamos archivo `fetch-6.js` y cambiamos `index.html`, ahí importamos `fetch-6.js`

Creamos archivo `no-encontrado.html`