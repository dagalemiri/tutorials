"use strict";

//////////////////////////////// Promesas ////////////////////////////////
// JS necesita repsonder asincronamente a interacciones del usuario (clicks o teclado).
// Node.js popularizo a JS como un lenguaje asincrono con el uso de callbacks como alternativa a eventos.
// Mientras se popularizo la programacion asincrona, los eventos y callbacks no fueron suficientemente poderozas para soportar lo que querian los desarrolladores.
// Las promesas son la solucion, son objetos que entregan operaciones diferidas y asincronas.
// Una promesa representa una operación que aún no se ha completado, pero se espera que en el futuro.
// Las promesas son una manera de organizar operaciones asincrónicas de tal manera que parezcan síncronas.
// Las promesas no aceptan argumentos, si uno quiere pasar argumentos debe aprovechar el scope.
// Then en caso de exito retorna una promesa.

// la promesa indica un marcador de posicion para el resultado
var promise = getUserData('https://randomuser.me/api/?nat=us'); 


// Esta funcion devuelve una promesa, la funcion tiene la promesa de notificar cuando se haya calculado el resultado.
// El constructor de la promesa acepta una funcion como parametro que tiene dos parametros, que tambien son funciones, 
// el primero (resolve), se invoca cuando la funcion se completo satisfactoriamente
// el segundo (reject), se llama si la funcion encuentra un error o falla.

function getUserData(url) {
  return new Promise(
    function (resolve, reject) {
      $.getJSON( url, function( data ) {
        // We can resolve the promise
        resolve(data);
      }).fail(function() {
        reject(new Error("Unable to load data: " + this.statusText));
      });
    });
}

// Para responder a la promesa se debe usar la funcion "then", la cual recibe dos argumentos.
// El primer argumento es la funcion relacionada a "resolve" (recibe un parametro value).
// El segundo parametro es una funcion llamada por reject, cuando la promesa es rechazada.
// No es necesario poner las dos funciones pero es deseable.

promise.then(
   function (value) { /* fulfillment */
     var person = value.results[0];
     console.log(person.name.last + ', ' + person.name.first);
   },
   function (reason) { /* rejection */
     console.log(reason);
 });


// Para hacer callbacks encadenados, se pueden encadenar then's.
// Esto tiene la característica que permite que un then use el resultado del then anterior
// El retorno de un then es el parametro de input del siguiente then
// La ejecucion de los then es sincrono.
// Solo se necesita un reject (funcion de error), cualquier promesa que llame a reject llamara a esta funcion

myPromise
    .then(function (result) {
        // Once we receive JSON,
        // turn it into a JSON object and return.
        return JSON.parse(result);
    })
    .then(function (parsedJSON) {
        // Once json has been parsed,
        // get the email address and make it lowercase.
        return parsedJSON.email.toLowerCase();
    })
    .then(function (emailAddress) {
        // Once text has been made lowercase,
        // print it to the console.
        console.log(emailAddress);
    }, function (err) {
        // Something in the above chain went wrong?
        // Print reject output.
        console.error(err);
    });


// Ejemplo

"use strict";
function getJsonModified() {
  return new Promise(function(resolve,reject) {
    setTimeout(function() {
      resolve("Imprimio");},1000);     
  });
}
                     
let promesa = getJsonModified();
promesa.then(function(data){
  console.log(data);
  return data+"gola";})
  .then((a) => console.log(a));


console.log("JAJAJ");






