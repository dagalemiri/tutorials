
//await hace referencia siempre a promesas, The await operator is used to wait for a Promise. It can only be used inside an async function. Pausa la operacion de una funcion asincrona. When placed in front of a Promise call, await forces the rest of the code to wait until that Promise finishes and returns a result.
// await funciona solo con promesas, no con callbacks y solo dentro de async functions.

// La declaración async function define una función asíncrona, devuelve una promesa. Transforma una funcion regular en una promesa

// Cuando una función asíncrona devuelve un valor, la Promise será resuelta con el valor devuelto.

// Una función asíncrona puede contener una expresión await, que detiene la ejecución de la función
// asíncrona y espera la resolución de la Promise pasada, y después continúa la ejecución de 
// la función async y devuelve el valor resuelto
// The async keyword will automatically create a new Promise and return it.
// El valor resolve de la funcion asincrona sera el valor del retorno de la funcion


// The await expression causes async function execution to pause, to wait for the Promise's resolution, and to resume the async function execution when the value is resolved. It then returns the resolved value. If the value is not a Promise, it's converted to a resolved Promise.

// If a Promise is passed to an await expression, it waits for the Promise's resolution and returns the resolved value.

async function queue(){
        var film = await getFilm(); //Supongamos que toca 'Matrix'
        var main = await getMain(film); //Neo
        console.log(main);
    }
    queue();//escribirá 'Neo' en la consola.
 
// En vez de tener que utilizar la respuesta de la primera petición en un incómodo then( function(){} ), 
// usando la palabra especial await podemos usar getFilm() y getMain() como si devolvieran valores síncronos en vez de promesas.
// Esto es mucho más cómodo de escribir, y sobre todo resulta en código mucho más legible.

Es equivalente a 

getFilm()
    .then(getMain)
    .then(console.log);



Cuando usamos la palabra reservada async al declarar una función, suceden dos cosas:

Podemos usar la palabra await dentro de esa función para acceder directamente a los valores que devolverían métodos que devuelven promesas.
La propia función que estamos declarando devuelve su valor de retorno como una promesa.
Cuando usamos la palabra reservada await al invocar una función:

Si la función sin await hubiera devuelto una promesa satisfecha, la llamada devolverá el valor de esa promesa.
Si la función sin await hubiera devuelto una promesa rechazada, lanzará un error con la razón del rechazo.
Si la función sin await hubiera devuelto un valor que no es una promesa, la llamada devolverá ese mismo valor (esto incluye undefined en llamadas a funciones sin valor de retorno).
Intentar utilizar await en cualquier lugar que no sea una función declarada como async resultará en un error. Por el contrario, se puede utilizar la palabra reservada async para declarar funciones sin usar await en ningún momento; no es que sea muy útil, sin embargo.


// Intentar utilizar await en cualquier lugar que no sea una función declarada como async resultará en un error. 
// Al declarar una funcion como async, automaticamente el retorno de la funcion es una promesa,
// por lo que al retorno se le puede encadenar then y catch. 
// Si hay un error dentro de una funcion async, se devuelve como una promesa rechazada. Si hay una promesa
rechazada dentro de una funcion async, se devuelve error.
Cuando encontremos errores, serán seguramente promesas que han sido rechazadas -pero invocadas con await-, fruto de algún Error real dentro de algún callback. Y al revés, cuando encontremos promesas rechazadas puede que originalmente fueran errores que han sido transformados en promesas por async.
Cualquier línea de código ejecutada inmediatamente después de una llamada a una función async no esperará a ninguna de las llamadas internas de esa función que utilicen await. Un ejemplo:




    async function getMain(){
        var film = await getFilm();
        return await getMain(film);
    };

    getMain().then(console.log)
    console.log('fin del script'); //esta línea se ejecutará antes que el log anterior.

a
Aquí, la segunda línea dentro de getMain espera a la primera -aunque sea una llamada asíncrona- por el uso de los await dentro de la función getMain, por estar declarada mediante async.
o obstante, los logs posteriores no están dentro de una función async. El then proveniente de getMain() se ejecutará después del log que imprime ‘fin del script’, porque la llamada es asíncrona.


// En este caso, la funcion C tiene que esperar a que la funcion B se ejecute, y esta tiene que esperar a la funcion A
// Por lo que si bien getABC es asincrono, dentro de la funcion se maneja de forma sincrona.

async function getABC() {
  let A = await getValueA(); // getValueA takes 2 second to finish
  let B = await getValueB(); // getValueB takes 4 second to finish
  let C = await getValueC(); // getValueC takes 3 second to finish

  return A*B*C;
}

// Si se quiere hacer asincronas las funciones de dentro, se debe trabajar todo con promesas.
async function getABC() {
  // Promise.all() allows us to send all requests at the same time.  
  let results = await Promise.all([ getValueA, getValueB, getValueC ]);  //las promesas corren en paralelo,
  // promise.all devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.
  // Se debe pasar un array o un objeto iterable

  return results.reduce((total,value) => total * value);
}


Another great thing about Async/Await is that it allows us to catch any unexpected errors in a good old try/catch block. We just need to wrap our await calls like this:

async function doSomethingAsync(){
    try {
        // This async call may fail.
        let result = await someAsyncCall();
    }
    catch(error) {
        // If it does we will catch the error here.
    }  
}
The catch clause will handle errors provoked by the awaited asynchronous calls or any other failing code we may have written inside the try block.a



// Ejemplo
function tiempo(secs) { return new Promise( (resolve,reject) => setTimeout( () => resolve(secs), secs)) }


async function f1(){
  let a = await tiempo(1000);
  let b = await tiempo(2000);
  return a + b;
}

f1();
f1().then((data) => console.log(data));




