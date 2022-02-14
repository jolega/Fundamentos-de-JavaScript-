

let a =10 ;
let b = 10;

a= 30; 

// todos los primitivo se pasan por valor
console.log(a,b)


// todos los objetos se pasan por referencia
let juan = {nombre : 'juan'};
let ana = {...juan}; // rompe la referencia 
ana.nombre= 'ana';

console.log(juan,ana);

const cambiaNombre =(...persona) => { // operador spread
    persona.nombre = 'Tony'
    return persona;
}

let peter = { nombre :'Peter'};
let tony = cambiaNombre(peter);

console.log({peter,tony});


// arreglos

const frutas = ['Manzana', 'pera', 'piña'];

console.time('spread')  // medir tiempos
const otrasFrutas = [...frutas];  // operador spread para romper la referencia tarda menos
console.timeEnd('spread')// medir tiempos

console.time('slice')// medir tiempos de ejecucion
const masFrutas = frutas.slice();
console.timeEnd('slice')


otrasFrutas.push('Mango')

console.table({frutas, otrasFrutas, masFrutas})