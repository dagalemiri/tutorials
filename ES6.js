"use strict";

//////////////////////////////// Declaracion de variables ////////////////////////////////
// var tiene como scope una funcion
// let tiene como scope un bloque, no se puede redeclarar una variable con let en el mismo scope
// si se puede reasignar.
// let elimina el problema de asignacion de variables en un loop.

if(true) {
   let x = 1;
}
console.log(x); // undefined

// const genera una variable read-only, se debe asignar directamente. No se puede cambiar.
// si la variable es un objeto o un array, puedo modificarlo, lo que no se puede hacer es cambiar la referencia al objeto.

const MY_CONSTANT = 1;
MY_CONSTANT = 2 // Error
const SOME_CONST; // Error

const MY_OBJECT = {some: 1};
MY_OBJECT.some = 'body'; // Cool

//////////////////////////////// Arrow functions ////////////////////////////////

// no se usa la palabra "function", solo los argumentos y =>. Return se agrega de forma implicita si el metodo es en una linea
// Si hay 0 o mas de 1 argumentos se usa () de forma explicita en el input

let titles = books.map( item => item.title ); // item es el input y el retorno es item.title

// si la funcion requiere mas de una linea se debe incluir en un {}

let result = [1, 2, 3, 4, 5].map( n => {
   n = n % 3;
   return n; // aqui es necesario retornar
});

// en una funcion normal hay que guardar this de la forma "var that = this"
// las arrow functions heredan this y arguments (las funciones normales no), las heredan del contexto que los rodea


//  ES6
let book = {
   title: 'X',
   sellers: ['A', 'B'],
   printSellers() {
      this.sellers.forEach(seller => console.log(seller + ' sells ' + this.title)); // this se hereda dentro de la arrow function
   }
}

// ES5 equivalent:
var book = {
   title: 'X',
   sellers: ['A', 'B'],
   printSellers: function() {
      var that = this;
      this.sellers.forEach(function(seller) { // this no esta disponible dentro de la funcion, no se hereda
         console.log(seller + ' sells ' + that.title)
      })
   }
}

//////////////////////////////// Template Literal ////////////////////////////////
// Crean strings con interpolacion con la sintaxis ${..}. Antes habia que concatenar con signo +.

let name = 'John'
console.log(`This is ${name}.`);

//////////////////////////////// Arrays ////////////////////////////////

// Pueden guardar distintos tipos de datos
// Array.from crea un Array a partir de argumentos de una funcion, una lista de nodos, un map, un set, etc...
// La ventaja de convertir algo en array es que se pueden usar los metodos de array (como iterar)
// Array from permite un segundo parametro en el cual se aplica un map sobre los objetos

let navElements = document.querySelectorAll('nav li');
let navTitles = Array.from(navElements, el => el.textContent);

// Array.of, es un constructor de arrays.
let x = new Array(3); // [undefined, undefined, undefined]
let y = Array.of(8); // [8]
let z = [1, 2, 3]; // Array literal

//////////////////////////////// Spread Operator ////////////////////////////////
// ... sirve para expandir elementos de un arreglo, sirve mucho para llamar funciones
// puede ser aplicado a todos los objetos iterables, como NodeList
// Tambien sirve para cuando se define una funcion, para almacenar todos los parametros extra en una variable
// Se usa en definicion de funciones y en invocaciones

let values = [1, 2, 4];
let more = [...values, 8, ...values]; // [1, 2, 4, 8, 1, 2, 4]

function doSomething(x, y, z) {
   // x = 1, y = 2, z = 4
}

doSomething(...values);

//////////////////////////////// Destructuring ////////////////////////////////
// Forma eficiente de extraer datos de arreglos u objetos
let [x, y] = [1, 2]; // x = 1, y = 2

// Se pueden intercambiar valores
[x, y] = [y, x]; // x = 2, y = 1

// para que funcione con objetos, tienen que coincidir las claves
let obj = {x: 1, y: 2}; 
let {x, y} = obj; // x = 1, y = 2

// se puede cambiar el nombre de las variables
let obj = {x: 1, y: 2};
let {x: a, y: b} = obj; // a = 1, b = 2

// funciona como variables de multiple retorno en funciones
function doSomething() {
   return [1, 2]
}
let [x, y] = doSomething(); // x = 1, y = 2

//////////////////////////////// Tipos de datos ////////////////////////////////
// Hay 6: string, number, boolean, null, undefined y symbol. 

/// Undefined ///

// Cuando una variable es declarada pero aún no tiene un valor asignado se considera undefined, también aplica para los parámetros de una función.

var miVariable;
 
console.log(miVariable); // undefined
console.log(typeof miVariable); // "undefined", typeof = dice el tipo de dato de una variable
 
function foo(bar) {
  console.log(bar);
}
foo(); // el parámetro bar es undefined

// Al ser undefined un tipo de dato, se puede asignar a una variable.
var otraVariable = undefined; // Innecesario, esto no es bueno. 
// Si la variable es de este tipo no estaremos seguros si fue porque JavaScript le asignó ese valor, 
// o nosotros lo hicimos y eso puede generar problemas más adelante cuando nuestro código aumente.

/// Null ///

// Por otro lado null representa la ausencia de valor intencional
// es decir que nosotros como programadores no sabemos que valor va a contener una variable que declaramos

/// Revisar parámetros ///

// Cuando escribimos una función debemos asegurarnos de que los parámetros que recibimos son correctos, 
// una revisión habitual es si algún parámetro es null o undefined, esto lo podemos hacer de la siguiente forma:

// Revisión de parámetros

function funcion(param) {
    if (param) { // hay valores que por su naturaleza son tratados como false y la condicion no se cumple (false, 0, NaN, “”)
       // param no es null ni undefined
    }
}
 
//////////////////////////////// DEFAULT VALUES ////////////////////////////////
// Si llamo a la funcion sin un valor de "y" se asigna el valor 2
// Si se llama con el valor "y" indefinido, tambien se asigna el valor 2

function doSomething(x, y = 2) {
   return x * y;
}

doSomething(5); // 10
doSomething(5, undefined); // 10, se asume la y como 2
doSomething(5, 3); // 15

//////////////////////////////// REST PARAMETERS ////////////////////////////////
// Usa el operador ..., se obtienen los valores que siguen en un array.

function doSomething(x, ...remaining) {
   return x * remaining.length;
}
doSomething(5, 0, 0, 0); // 15

//////////////////////////////// Modules ////////////////////////////////

// lib/math.js, pueden haber multiples export en la libreria
// las instrucciones de importación son síncronas, pero el código de módulo no se ejecuta hasta que todas las dependencias se han cargado.

export function sum(x, y) {
   return x + y;
}
export var pi = 3.141593;
// app.js

import { sum, pi } from "lib/math";
console.log('2π = ' + sum(pi, pi));

//Tambien se puede importar toda la libreria usando "as" y "*" para referirse a ella.

import * as math from "lib/math";
console.log('2π = ' + math.sum(math.pi, math.pi));


//////////////////////////////// Classes ////////////////////////////////

class Vehicle {
   constructor(name) { // metodo constructor
      this.name = name;  // los atributos se llaman con this
      this.kind = 'vehicle';
   }
   getName() {
      return this.name;
   }   
}

class Car extends Vehicle { // auto hereda de vehiculo
   constructor(name) {
      super(name); // se llama al constructor del padre, se puede usar super para acceder a un metodo tambien
      this.kind = 'car'
   }
}

let myCar = new Car('bumpy');

myCar.getName(); // 'bumpy'
myCar instanceof Car; // true
myCar instanceof Vehicle; //true
// ocurre polimorfismo, myCar es instancia de su clase y de la de su padre


//////////////////////////////// Symbols ////////////////////////////////
// Son un tipo de dato, se usan para crear identificadores unicos.

const MY_CONSTANT = Symbol();

let obj = {};
obj[MY_CONSTANT] = 1;

// Se puede dar una descripcion al simbolo, pero siempre es unico

var sym2 = Symbol('foo');
var sym3 = Symbol('foo');

Symbol('foo') === Symbol('foo'); // false



//////////////////////////////// Named parameters ////////////////////////////////
// Son una forma de dar parametros opcionales dentro de un map como input de una funcion, se acceden como variables locales.
// De esta forma se puede acceder a parametros de un hash (pero no siempre se pasan los parametros, se pueden omitir)
// Si un parametro del objeto se omite queda indefinido
// Es malo no pasar parametros al objeto, da error, hay que usar default parameters

