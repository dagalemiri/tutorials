# Web componentes

* Primera idea de reutilizar el codigo en la web, antes de React y Angular.
* React rediseño los web components
* Polymer hace algo muy cercano al estandar de los web components
* Crea componentes reusables (estilo y comportamiento).

Hay cuatro elementos que complementan los web componentes, el
unico absolutamente necesario es custom elements, casi necesario
el shadow dom. 

## Templates

Trozo de markup incorporado solo cuando es necesario. Es para
evitar el display none. Se hace bien con un "template" tag en html, con JS
puedo obtenerlo e instanciarlo. Con template en un inicio está oculto en el DOM el trozo de html.

## Shadow DOM

Encapsula estilos definiendo distintos scopes. Crea su "propio DOM" con su propio dom (shadow tree). Se va a hacer un attach de este shadow tree a un nodo, de esta forma se encapsula su estilo. Algunos elementos de HTML5 estan implementados como shadow dom (no se pueden tocar, hay elementos ocultos). Algunos elementos no se pueden usar como host. Hijos de un shadow tree no se pueden acceder por queries. El shadow dom se crea en el javascript.

## Custom elements

Se adjunta un shadow dom asi mismo, encapsulando estilo y comportamiento (puede ir asociado o no al shadow dom). Custom elements crea tags html propios, los puede extender, mejorar, entre otros. Se definen los componentes en clases que extienden de HTMLElement. Polyfill: permite correr el codigo aunque no se tenga la implementación.

## HTML import

Deja afuera los iframe, permite importar html. El orden en el que se incorpora las cosas importa, el browser va a tratar de ejecutar el javascript una vez que se importa, por lo que hay que tener cuidado. Hay que agregar un atributo async en algunos casos. 

## Polimer

Usado por google en componentes web, es una libreria. Se puede usar con React

# SPA

Se ha tratado de replicar un patron MVC en el cliente, ya no es tanto asi. El lado del cliente tiene algunas particularidades, React no lo implementa ya que no necesariamente es la mejor manera.
