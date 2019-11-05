# Angular

## Conceptos básicos

* AngularJS es un framework muy equilibrado. proporciona templating, databinding y una arquitectura estándar para los proyectos. 
* Fue creado por Google
* Sirve para desarrollar SPA.
* El binding no es más que enlazar la información que tenemos en el "scope" con lo que mostramos en el HTML:
	1.  El One-way binding de react la información solamente fluye desde el scope hacia la parte visual, osea, desde el modelo hacia la representación de la información en el HTML. Ese dato estarías trayéndolo desde el scope y mostrándolo en la página. La información fluye desde el scope hacia la representación quiere decir que, si por lo que sea se actualiza el dato que hay almacenado en el modelo (scope) se actualizará automáticamente en la presentación (página).
	2. En el two-way data binding la información fluye desde el scope hacia la parte visual (igual que en "one-way binding") y también desde la parte visual hacia el scope. Angular 2 nos permite modificar el valor de una propiedad de forma bidireccional, de forma que cuando nosotros modificamos el valor de una propiedad en la vista el valor también se actualiza en el modelo de datos. Resumiendo cambiamos el valor de una propiedad con una caja de texto en la vista, ese valor se cambia en la vista y también en el componente.

El código que tendrías que hacer para implementar un ejemplo de 2-way data binding en react sería muy co,pleto (suscribirte eventos, definir las funciones manejadoras para que cuando cambie el estado del campo de texto, volcarlo sobre la página). 

El doble binding de Angular nos ahorra mucho trabajo, pero ojo, quizás no sea necesario para cualquier tipo de aplicación. Si tus necesidades no son muy grandes igual no consigues adelantar tanto. Incluso en aplicaciones con inmensa cantidad de datos puede que el doble binding te pueda ralentizar un poco la aplicación porque toda esa gestión del binding se haga pesada, igual de manera innecesaria. En esos casos quizás otra librería funcione mejor que AngularJS. Sin embargo, la inmensa mayoría de las aplicaciones se beneficiarán de ese doble binding.
* Angular 1 se conoce como Angular.js, las versión desde Angular 2 en adelante se conoce como Angular a secas.


## ¿Porqué usar Typescript?

TypeScript es un superset de ECMAScript 6, es decir, incluye todas las funcionalidades de ES6, y además incorpora una capa por encima con funcionalidades extra. Se puede mezclar código TypeScript con código ES6 estándar sin problema, y el compilador de TypeScript seguirá pasando el código a ES5 (recordemos que tanto ES6 como TypeScript se transpilan a ES5 para que los navegadores actuales puedan ejecutar el código).

* El uso de variables tipadas de TypeScript aporta mayor robustez al código, pero por contra nos hace perder flexibilidad. Se pueden encontrar errores en tiempo de compilación en vez de en tiempo de ejecución (como sería en ES6)
* Se puede declarar en el constructor de una clase su un atributo es público o privado, además automáticamente se realiza la asignación del parámetro al dato miembro.
* En typescript hay decoradores (añadir funcionalidad a un objeto de forma dinámica) que se pueden utilizar antes de declarar una clase, propiedad, método o parámetro, y utilizan la sintaxis @myDecorator(args). En angular se usan mucho los decoradores, por lo cual Typescript da facilidad a la hora de declararlos. Declarar decoradores con ES6 no se puede, se implementarán en ES7. La complejidad del código Typescript es menor que la de ES6. Es más sencillo usar Angular 2 con la sintaxis de decorators de TypeScript. Pero también puedes utilizarlos con el plugin transform-decorators-legacy de Babel sin necesidad de recurrir a TypeScript.
* Angular usa mucho la inyección de dependencias (patrón de diseño orientado a objetos, en el que se suministran objetos a una clase en lugar de ser la propia clase la que cree el objeto). En el caso de Angular 2, este se beneficia de los parámetros tipados para inferir la inyección de dependencias. Angular 2 detecta que la clase depende de dicho servicio. TypeScript simplifica la Dependency Injection de Angular 2, pero también puedes conseguirlo con el plugin de Babel angular2 annotations. Con ES6 sería más código lograr el mismo resultado

## ¿Por qué usar Angular?

1. Angular ayuda a iniciar un proyecto sin tomar de decisiones. Otros frameworks (como React) necesita agregar muchas librerias para poder iniciar la aplicación. Con Angular ya sabes desde el primer momento cómo organizar el código, cómo se realizan las diferentes tareas que necesitas y la arquitectura de la aplicación. Esto ayudar a unificar el conocimiento de los programadores, es cosa de aprender a usar el framework para poder trabajar en cualquier proyecto. En React se necesita conocer especificamente cada libreria que usa cada proyecto, ya que pueden ser distintas.
2. Uso de Typescript: en ES6 se ofrecen varias formas diferentes de declarar un objeto, lo cual puede confundir a muchos. Con TypeScript esto no pasa, y toda la sintaxis y la manera de hacer las cosas en el código es la misma, lo que añade coherencia a la información y a la forma de leer el código. Esta consistencia debería ayudar a evitar la confusión y la sobrecarga en la toma de decisiones derivadas de empezar con Angular. Todo esto redunda además, a largo plazo, en un mejor y más fácil mantenimiento de las aplicaciones.
3. El diseño de Angular adopta el estándar de los componentes web. Se trata de un conjunto de APIs que te permiten crear nuevas etiquetas HTML personalizadas, reutilizables y auto-contenidas, que luego puedes utilizar en otras páginas y aplicaciones web.
4. Los cambios en Angular no significa que haya grandes modificaciones, no se romperá la compatibilidad. Con Angular la idea es que podemos apostar por este framework a largo plazo. Y esto es algo de suma importancia, sobre todo en proyectos grandes y en empresas de producto, donde los desarrollos se mantienen durante varios años.
5. Las plantillas de Angular almacenan por separado el código de la Interfaz de usuario y el de la lógica de negocio

## ¿Por qué no usar Angular?

1. Uso del DOM regular: Angular manipula el DOM directamente, lo cual lo hace más lento e ineficiente en comparación a React.
2. Angular tiene falta de libertad y simplicidad en relación a React.


## Angular CLI

Es una consola de comandos para Angular, hace fácil la creación de aplicaciones. Además, permite generar rutas, componentes, servicios entre otros con un simple comando.

## Elementos de Angular 

* Decorador component: sirve para transformar una clase en componente, hay que especificar como se va a mostrar este componente mediante un template HTML. La clase define el comportamiento del componente.
* Comunicación de componentes anidados: para enviar datos se usan propiedades (decorador @input), para recibir datos se usan eventos (decorador @output). 
* Bindings: sirven para formar la comunicación
	1. De propiedad: se da un valor a uno de los inputs del componente, cada vez que cambie este valor, el componente lo va a recibir. Se denota por []. [property]="expression", donde "expression" es un template expression. Una expresión puede referirse a properties del contexto del template (AppComponent) o a variables de input (let hero). Aqui están las template expressions.
	2. De evento: Cada vez que el componente hijo emita un evento, el componente padre va a ser notificado. Se denota por (). (keyup.enter)="addTodo()" le dice a angular que ejecute addTodo() cuando se presione enter.
	3. Doble: Es una combinación de los dos binding anteriores, cada vez que cambia el valor se notifica al hijo y cada vez que el hijo emita un evento se notifica al padre. Se notifica por [(ngModel)]. Si en un input de html se agrega [(ngModel)]="newTodo.title", quiere decir que se agrega un two-way data binding entre el input html y el newTodo.title.
* Directiva: clase que define palabras claves que se pueden usar dentro de un template. Pueden ser:
	1. Estructural: si modifica el diseño (como ngFor). En este caso <div *ngFor="let hero of heroes">{{hero.name}}</div>, hero hace referencia a la template variable del ngFor.
	2. De atrbituo: modifica la apriencia o comportamiento de un componente (como el binding doble).
* Módulo: clase principal, todas las aplicaciones tienen al menos 1 modulo o más. Puede haber un módulo para cada funcionalidad, donde se especifican las dependencias y componentes.
* Servicios: son clases usadas por los componentes para pedir datos u operaciones, se usan para aislar la lógica de negocio (peticiones a API). La inyección de dependencias sirve para usar un mismo servicio en múltiples componentes. Para lograr la inyección solo hay que mencionar en el módulo que clases van a ser inyectables.
* Los componentes están encapsulados en un Shadow Dom.
* Interpolación: Para mostrar variables en el HTML del template se usa {{variable (property del componente)}}. De forma más general, el código entre corchetes es un primero es evaluado y luego es convertido a string {{1 + 1}} = {{2}}.


You may be familiar with the component/template duality from your experience with model-view-controller (MVC) or model-view-viewmodel (MVVM). In Angular, the component plays the part of the controller/viewmodel, and the template represents the view.

The <script> element is a notable exception; it is forbidden, eliminating the risk of script injection attacks. 

*ngIf="todos.length > 0": only show the section element and all its children when there is at least one todo

[class.special]="expression": add special CSS class to element when the value of expression is truthy

That’s exactly where the expression context comes in. An expression context is a context in which expressions are evaluated. The expression context of a component is the component instance. And the component instance is an instance of the component class.

The use of public or private on arguments in the constructor is a shorthand notation that allows us to automatically create properties with that name, so:

class AppComponent {

  constructor(private todoDataService: TodoDataService) {
  }
}
is a shorthand notation for:

class AppComponent {

  private todoDataService: TodoDataService;

  constructor(todoDataService: TodoDataService) {
    this.todoDataService = todoDataService;
  }
}



Behind the scene as we said previously, Angular 2 detects a <cars-app> element in the page, then it creates an instance of the CarsApp class and this instance is the evaluation context of the template’s expressions. After that the CarsApp instance sets the totalCars property to ‘985’. so it first evaluates and then converts to a string. If you already know Angular 1.x, you are probably familiar with this template syntax.


Using the # syntax, we are creating a local variable name referencing the DOM object HTMLInputElement. The local variable can be used anywhere in the template.


The syntax uses * to show it is a structural directive.

NgFor is a repeater directive — a way to customize data display.

Haciendo un símil con AngularJS (Angular 1), un componente vendría a ser un controlador que siempre va ligado a una vista.

El componente define propiedades y métodos que están disponibles en su template, pero eso no te da licencia para meter ahí todo lo que te parezca. Es importante seguir una aproximación de diseño S.O.L.I.D., y extraer toda la lógica en servicios para que el controlador solo se encargue de gestionar 1 única cosa: la vista.


Los decoradores @Input() y @Output() te permiten definir atributos de entrada o salida en un componente.

Todos los componentes registrados en angular son singleton, es decir, sólo existe una instancia de ellos en la aplicación y si hay varios componentes que dependen de un mismo objeto, todos recibirán la misma instancia del objeto. Esto es lo que permite utilizar fácilmente los servicios para almacenar estado, ya que dos Controllers que dependan de un mismo servicio estarán utilizando el mismo objeto y, por tanto, podrán compartir información a través de él. El mayor inconveniente de usar un contenedor de inyección de dependencias en un lenguaje dinámico como javascript es que necesitamos definir explicítamente las dependencias ya que no existen un sistema de tipos que permita inferirlas automáticamente.





Cosas para hablar: 

- Por que Typescript:
* Codigo facil para inyeccion de dependencias
* Codigo facil para decoradores
* TypeScript aporta mayor robustez al código
* Errores en tiempo de compilacion y no de ejecucion

porque angular:
* two way data binding (en react es complejo)
* arquitectura

Inyección de dependencias es singleton (Se puede compartir el estado entre componentes)
Haciendo un símil con AngularJS (Angular 1), un componente vendría a ser un controlador que siempre va ligado a una vista. MVVM. El componente tiene el controlador y la vista, y el controlador es el que se comunica con la vista y el modelo. Se separa la responsabilidad por los principios Solid.
El controlador se encarga de una sola cosa
El componente define propiedades y métodos que están disponibles en su template, pero eso no te da licencia para meter ahí todo lo que te parezca. Es importante seguir una aproximación de diseño S.O.L.I.D., y extraer toda la lógica en servicios para que el controlador solo se encargue de gestionar 1 única cosa: la vista.