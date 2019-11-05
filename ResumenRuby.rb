########STRINGS#######

number = '2000'  #strings van con comillas simples o dobles

puts "Tengo #{number} pesos" #comillas simples se interpreta el string tal cual, comillas dobles permite interpolar

puts %Q|jajajajajaj345&%$/&&/%·| # con %Q|algo|, se puede escribir cualquier cosa en "algo" sin que haya problemas de caracteres

puts ("hola"+' '+'como' << ' ' << 'estas') #los strings se comportan como string y lista, por lo que tienen concatenar(+), append(<<) y acceso a caracteres[]

word = 'amigo'
p word[1]
p word[-1]

########SIMBOLOS#######

#Los dos puntos se pueden interpretar como "la cosa llamada". Entonces :id, se interpreta 
        #como "la cosa llamada id". Los símbolos no contienen valores como las variables. 
        #Un símbolo es una etiqueta, un nombre, nada más. Dado un simbolo, se refiere a un mismo objeto todo el programa (mas eficientes)
        #que strings (dos strings con el mismo nombre son obtejos distintos, se diferencian por ID)

:symbol #(es un string pero mantiene la identidad)
puts "hola".object_id 
puts "hola".object_id 
puts :symbol.object_id
puts :symbol.object_id

puts :"simbolo"

########ESTRUCTURAS DE DATOS#######

#array: los elementos pueden ser de distinto tipo y el tamaño es dinamico

o = []
array =  [1,2,3,4]
array1 = [5,6,1,2]
a = %w[this is a test] #transforma un string a un array, elementos se separan por espacio
p a

#a[a.size-1] y a[-1] acceden al ultimo elemento, consultas por indice mas alla del largo y mas abajo de 0 retornan nil
#a[-a.size] accede al primer elemento. No puedo acceder a un largo negativo inferior al largo del array, o sea, 
#si mi array tiene 4 elementos, a lo mas puedo llegar a -4, con -5 se cae

#Si tengo un arreglo de largo 4 y le agrego un objeto en la posición 8, ruby lo va a agregar en 8 pero dejara nil en las
#posiciones donde no habia nada, pero si agrego un elemento bajo -largo_array, devuelve error.

#los rangos se escriben inicial..final (considera el final), puedo acceder a un rango del array, si hago inicial...final, no se considera el ultimo
p array[1...3]

p array + array1   # agrega todos los elementos de array1 en array, array no cambia 
p array | array1   # union de arrays, elimina duplicados, array no cambia
p array & array1   # interseccion de array, elimina elementos que no son compartidos por ambos, elimina duplicados, array no cambia
p array - array1   # diferencia de arrays, imprime los elementos que estan en array que no estan en array1, los elementos de array1 que no estan en array no se consideran
p array << array1  # agrega array1 completamente (como un solo elemento) a array, array cambia para siempre

b = [0] * 8  # genera un array de 8 elementos a partir de [0]
p b

#Hashes: es como un array pero el indice es cualquier cosa

h = Hash.new  #tambien se define como h = {}

#se puede crear un hash de estas tres formas:

h["one"] = 1
h["two"] = 2

h2 = {"one" => 1,"two" => 2} #key es string
h3 = {:one => 1, :two => 2} #key es simbolo
h4 = {one:1,two:2} #key es cualquier cosa


#Objetos
a = "Ruby"
b = c = "Ruby" #b y c apuntan al mismo objeto Ruby, pero distinto que a

p a.equal?(b) #ruby maneja las referencias de los objetos, no el objeto en si. equal pregunta si el objeto que apunta en memoria a y b son iguales
p b.equal?(c)

p a == b #esto pregunta si el valor al que apuntan ambos punteros es igual, no si el objeto en memoria es el mismo


#Block: se usan en metodos iteradores, se denotan por {} y es anonimo, hay variables adentro pero que no tienen valor
#los parametros (variables) al definirlos van dentro de |x|, despues se trabaja solo como x

3.times {|x| print "#{x}\n"}

#la instruccion yield sirve para ejecutar dentro de un metodo un bloque, se debe entregar a la funcion el bloque como parametro

def triple(algo) 
	yield algo #yield invoca el bloque y le entrega "algo" como parametro para el bloque
	yield 3 
	yield algo
end

triple("debo estudiar Ruby") {|x| puts x} #funcion con parametros y con el bloque

#control de flujo: if se cierra con end, no hay que cerrar cada if/elsif/else, solo se cierra al final de las condiciones.
#no se requiere :

aux = 8
if aux == 0
	puts 1
elsif aux > 0
	puts 2
end
	

#funciones: se inician con def, se cierran con end. No es necesario incluir parentesis en parametros. Se retorna
#por defecto lo ultimo que se evaluo. No se requiere :

def sumar a,b   
	a + b
end
p sumar 4,5


def prefix(s, len=1) #puedo fijar un valor para un parametro si este no es entregado => valor por default
	s[0,len]
end
p prefix("Ruby", 3) #si entrego el parametro len, este vale 3. Si no lo entrego, por defecto vale 1.
p prefix("Ruby")

def max(first, *rest) #el parametro first es obligatorio pero rest es opcional, se decide en tiempo de ejecucion cuantos parametros dar al metodo
	max = first
	rest.each {|x| max = x if x > max } 
	max
end
p max(1) # si ningun parametro es entregado, rest es un arreglo vacio, de lo contrario rest es un arreglo de los elementos opcionales
p max(1,2) 
p max(1,2,3)


##########Clases y objetos######## Las clases empiezan con mayuscula
#el constructor es la funcion initialize. Para crear un objeto se llama a clase.new(params), este llama al metodo init.
#El metodo initialize es un metodo de clase (estatico). Los atributos de una instancia son @attr, estos se definen en el intialize.

#el comando attr sirve para crear los get-set de las variables, 
#attr_reader :a1 => permite crear el atributo de instancia @a1 y el metodo para leerlo.
#attr_writer :a1 => permite crear el atributo de instancia @a1 y el metodo para escribirlo.
#attr_accesor :a1 => permite crear el atributo de instancia @a1 y el metodo para leerlo y escribirlo.

#Por defecto los atributos de un objeto son privados pero se heredan, las variables de clase tienen el mismo comportamiento (protected)
#leer un atributo es similar a => si no defino el metodo para leer el atributo (o attr_reader), al intentar hacer ob.name tira error
#def name
#	@name
#end

#escribir un atributo es:
#def name=(param)
#	@name = param
#end

#variables de clase comienzan con @@, los metodos de clase parten con def self.name_method o class_name.name_metodh
#una de las caracteristicas de los metodos de clase es que se pueden declarar fuera de la clase. Las variables de clase
#se definen fuera de los metodos pero dentro de la clase

# Herencia se denota por <, solo hay herencia simple pero existen los mixins para dar distintos comportamientos.
# Se puede llamar al metodo super (metodo de la clase padre con el mismo nombre en la clase hija) con el comando super






class Persona



	@@raza = "humano"
	attr_reader :edad  #los get set se declaran como simbolo
	def initialize(nombre,edad)
		@nombre = nombre  #si defino una variable de instancia pero no hago el get set, no puedo acceder a el
		@edad = edad 
	end

	def nombre    # get 
		@nombre
	end

	def nombre= (nombre)  #set 
		@nombre = nombre
	end

	def self.raza
		@@raza
	end

	def self.raza= (raza)
		@@raza = raza
	end

	def saltar
		"estoy saltando"
	end

	def comer(comida)
		 "estoy comiendo #{comida}"
	end

	def privado
		"Este metodo es privado"
	end

	private :privado #uso private y hago un simbolo con el nombre del metodo, lo hace privado. Tiene que estar abajo del metodo

	private #los metodos de aqui para abajo no se pueden acceder desde afuera, solo dentro de la clase

	def solohumanos
		"esto es solo de humanos"
	end
end

def Persona.patas    # se pueden definir metodos de clase fuera de la clase
	4
end

david = Persona.new("David",22)
p david.nombre
david.nombre = "Juan" 
p david.nombre
p Persona.raza  #para llamar a una variable de clase tengo que poner el nombre de la clase, no el nombre de la instancia
Persona.raza = "Perro"
p Persona.raza
p Persona.patas



class Estudiante < Persona

	attr_reader :carrera

	def initialize(nombre, edad)
		super  #pasa por defecto todos los parametros del metodo de estudiante al metodo super
		@carrera = "carrera"
	end
 
	def comer(comida)  #sobre escribir metodos
		 super(comida) #paso parametros de metodo de estudiante a persona, yo elijo cual les paso. Si hago super() no paso ningun parametro

	end 
end

estudiante = Estudiante.new("Pedro",45)
p estudiante.edad
p estudiante.carrera
p Estudiante.patas  #las variables de clase tambien se heredan
p estudiante.saltar #los metodos se heredan
p david.comer("carne")
p estudiante.comer("sopaipillas")


####Modulos### 

#Los módulos son similares a las clases en que contienen una colección de métodos, constantes y otros módulos y definiciones. 
#Pero a diferencia de las clases, no se pueden crear clases derivadas de los módulos.
#Cuando un modulo se incluye dentro de una clase, se llama mixin
#Modulos y clases deben empezar con mayuscula SI O SI

module Mathmodulo
	VARIABLE = 4
	class DentroModulo
	end

	def suma(x,y) #estos metodos solo pueden ser llamados por los mixin, son metodos de instancia, son como metodos de la clase que hace el mixin
		p x + y #no puede ser llamado por la libreria, solo por la clase que hace el mixin
	end

	def self.declase #este es un metodo de clase, se llama por Mathmodulo::metodo o Mathmodulo.metodo, no por la clase
		p "Este si po compadre"
	end
end

class Classmodule
	include Mathmodulo  #para hacer un mixin, se agrega include nombremodulo

	def tevoyacambiar
		p "antes"
	end

end


var = Classmodule.new
var.suma(6,6) #puedo usar los metodos del mixin, pero las variables del modulo no, esas son propias del modulo, se llaman con Modulo::Var
foo = Mathmodulo::DentroModulo.new  #si quiero llamar a una clase dentro de un modulo debo hacer modulo::nombre_clase, esto define un namespace

var.suma(2,3)

p Mathmodulo::VARIABLE  #si quiero llamar una variable del modulo es con dos puntos tambien

Mathmodulo::declase
Mathmodulo.declase

#para importar un modulo se hace require 'nombre de modulo' (nombre de modulo es en minuscula)

#####Especializar instancias ####

#si tengo una instancia de una clase puedo modificar los metodos de la clase solo para ese objeto

t = Classmodule.new
t.tevoyacambiar

def t.tevoyacambiar  #incluyo el nombre de la variable.metodo y hago el cambio
	p "despues"
end

t.tevoyacambiar


#Load lee y analiza otros archivos en su código cada vez que se ejecuta un script.
#El metodo require corre otro archivo y lo guarda en memoria, si se cambia el modulo, ese cambio no se ve en el codigo ya que el codigo lee lo que guardo en memoria (solo lo actualiza 1 vez)
#Include toma todos los metodos de un modulo y los incluye en el modulo actual. Se usa para extender las clases con modulos (mixin)

####Excepciones###

#la palabra reservada 'raise' arroja un error, simula que hay un error, se puede describir cual es ese error (mnsaje del error) con un comentario
#si no se pone un mensaje a raise, por defecto es runtime excepcion 

def division(val1,val2)
	begin   ## se inicia la excepcion
		result = val1/val2  ## se pone el codigo que puede causar la excepcion
	rescue StandardError => e  # aqui se lanza el error que provoco la excepcion
		p e.class   #dentro de rescue se dice que es lo vamos a hacer con el error encontrado
		p e
		result = nil
	end
	return result
end

p division(20,0)

def simular_error
	begin 
		texto = "jaja"
		#texto.multiplicar
		raise "wenaql"  ##lanza un error
	rescue Exception => e
		puts e.message
	end
end

simular_error


# Block, no son objetos, es solo una parte de la sintaxis de una llamada a un metodo, no significa nada por si solo
# los bloques no se pueden asignar a variables, solo se puede pasar 1 block a un metodo, en cambio, se puede pasan varios  proc como variable

[1,2,3].each { |x| puts x*2 }   # Un block entre corchetes de llave

[1,2,3].each do |x|
  puts x*2                    # el block es todo lo que esta entre el do y el end
end

# Proc (son objetos), proc es una clase que se instancia con new y se da como parametro un bloque (metodo)             
p = Proc.new { |x| puts x*2 }
[1,2,3].each(&p)              # el & transforma el proc en un bloque. Puedo pasar el bloque como parametro de una funcion aplicando como parametro &bloque, despues lo llamo dentro de la funcion con call

proc = Proc.new { puts "Hello World" }
proc.call                     # se ejecuta el body del proc con call

#a un proc se le pueden entregar mas o menos argumentos de los que se definio, retorna nil si faltan argumentos o retorna solo la cantidad para la que se definio, los demas se ignoran
#proc y lambda son instancias de proc, ambos se llaman con call

# Lambda, a los lambda hay que entregar un numero exacto de parametros, no se pueden entregar mas o menos         
lam = lambda { |x| puts x*2 }
[1,2,3].each(&lam)

lam = lambda { puts "Hello World" }
lam.call

#Usar return en un lambda retorna el valor del lambda, usar return en un proc retorna de todo el bloque donde esta el proc (te saca del bloque), es como un return de una funcion

#El iterador 5.times va a entregar 0,1,2,3,4


def test(hola)
	yield hola
end
test("buenos dias") {|x| p "Mensaje: #{x}"}

def test1(hola,&block)
	block.call(hola)
end

test1("malos dias") {|x| p "Mensaje: #{x}"}
