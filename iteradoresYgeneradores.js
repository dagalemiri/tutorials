
"use strict";

/////////////////////// Iteradores ///////////////////////
// Los objetos iterables es aquel que expone un metodo predeterminado para iterar sobre el (string, array, map y set)
// Los objetos no son iterables

// En ES6 se pueden definir funciones iterables para iterar objetos que no son iterables con el for

let arr = [1, 2, 3];
for (let item of arr) { // itera sobre los elementos del array
    console.log(item)  // 1, 2, 3
}

// Los objetos iterables implementan la interfaz "iterable".
// Los iterables devuelven un objeto con la forma {done:bool, value: "value"}
// Si done es falso, quiere decir que hay valores (value devuelve algo), cuando done es true value es undefined y se termina.
// Los iterables acceden a items dentro de una coleccion uno a la vez, sabiendo en que posicion estan.


// Se puede iterar un arreglo con la siguiente sintaxis:

let iterator = arr[Symbol.iterator](); // crear el iterador con el objeto iterable

let firstRun = iterator.next(); // metodo que llama al siguiente valor, devuelve un objeto
let firstValue = firstRun.value;


// Se hace uso del metodo [Symbol.iterator].
// Un iterador es un objeto con el metodo next, por lo que se puede hacer un iterador con cualquier objeto
// siempre que se defina el metodo next para acceder al done y value.

// Se se define un iterador para un objeto, se puede iterar sobre el con un for..of de forma normal.
// Una ventaja de hacer iterable un objeto es que se puede aplicar el operador spread (los valores de los atributos quedan como arreglo), 
// ademas, se puede hacer destructuring con los valores de los atributos.

let post = {
	text: "Hello world",
    replies: 19
};

post[Symbol.iterator] = function(){
  
  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;
  
  let next = () => {
    if (count >= properties.length){
        isDone = true; 
    }
    return {done: isDone, value: this[properties[count++]]};  // el valor se aumenta en 1 despues de haber sido leido
  }
  return {next};
  
  
};

for (let att of post){
  console.log(att);
}


/////////////////////// Generadores ///////////////////////


// Son funciones que pueden ser pausadas sin bloquear la ejecucion del programa y ser reanudadas en otro momento,
// ademas, guardan una referencia a su contexto (guardan el valor de las variables locales).

// Esta funcion devuelve un objeto iterador, al ejecutar .next() sobre ese objeto
// el cuerpo de la funcion se ejecuta hasta llegar a yield el cual especifica un value para el retorno del iterador

function* generator () { // se declaran con asterisco
  let index = 0
  while (index < 3)
    yield index++  // debe tener como minimo un yield, yield retorna un objeto iterador {done,value}
}

let g = generator() // este generador se puede recorrer con un for.. of o con .next(), spread y destructuring.

console.log(g.next())  // Object {value: 0, done: false}
console.log(g.next())  // Object {value: 1, done: false}
console.log(g.next())  // Object {value: 2, done: false}
console.log(g.next())  // Object {value: undefined, done: true}


// Puede haber mas de un yield
function* fib() {
  var current = a = b = 1
  yield 1

  while (true) {
    current = b
    yield current
    b = a + b
    a = current
  }
}

sequence = fib()



//El codigo de iteradores se puede transformar a 

let post = {
	text: "Hello world",
    replies: 19
};

post[Symbol.iterator] = function *(){
  
  let properties = Object.keys(this);
  let count = 0;
  for (let y of properties)
  	yield this[y];
  
  
};

for (let att of post){
  console.log(att);
}