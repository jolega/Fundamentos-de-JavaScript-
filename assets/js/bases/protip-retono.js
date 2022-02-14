/*
function crearPersona(nombre, apellido){
    return{ nombre, apellido}
}
*/
const crearPersona = (nombre, apellido)  => ({nombre, apellido})
 

const persona= crearPersona('Johan Leonardo', 'Garcia Alonso')
console.log(persona);


function imprimeArgumentos(){ // imprime argumentos
    console.log(arguments)
}

const  imprimeArgumentos2=(...args) => {console.log(args)} // parametro res no puede ir nada despues
const  imprimeArgumentos3=(edad,...args) => {console.log(args)} // parametro res no puede ir nada despues
const  imprimeArgumentos4=(...args) => {return args} // parametro res no puede ir nada despues
imprimeArgumentos(10,5,'hola')
imprimeArgumentos2(10,5,'hola')
imprimeArgumentos3(10,5,'hola')

const argumentos =  imprimeArgumentos4(10,5,'hola')
console.log(argumentos)

const [edad, tiempoEmpesa, Saludo] =  imprimeArgumentos4(10,5,'hola') // iguala a los argumentos una nueva varible
console.log(edad)
console.log(tiempoEmpesa)
console.log(Saludo)

const {apellido}= crearPersona('Johan Leonardo', 'Garcia Alonso')  // extrae el valor que trae 
console.log(apellido)

const {apellido: nuevoapellido}= crearPersona('Johan Leonardo', 'Garcia Alonso')  // extrae el valor que trae en otra variable 
console.log(nuevoapellido)

const tony ={
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo : false,
    edad : 40,
    trajes : ['Mark I', 'Mark V', 'Hulkbuster'],
};
/*
const imprimePropiedades = (personaje) => {
    console.log('nombre: ', personaje.nombre)
    console.log('codeName: ', personaje.codeName)
    console.log('vivo: ', personaje.vivo)
    console.log('edad: ', personaje.edad)
    console.log('trajes: ', personaje.trajes)

}
*/
const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => { // define parametros 
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes}) 
}

imprimePropiedades(tony);