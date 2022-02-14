let juegos = ['zelda', 'Mario', 'Metroid','Chrono']
console.log('largo:', juegos.length)

let primero = juegos[0];  // muestra el primero
let ultimo =  juegos[juegos.length - 1 ];  // muestra el Ultimo

console.log({primero}) 
console.log({ultimo})

console.log({primero, ultimo})


let nuevaLongitud =juegos.push('F-zero'); // agregar un elemento al final y retorna longitus
console.log({nuevaLongitud})


nuevaLongitud =juegos.unshift('Fire Emblem')  // agrega un elemento al comienzo 
console.log({nuevaLongitud})

let juegoBorrado = juegos.pop(); // elimna el ultimo y muestra cual es el que borra
console.log({juegoBorrado})

let pos= 1;
let juegosBorrados =juegos.splice(pos, 2) // elimina el numero de posiciones en adelante a patir del pos
console.log({juegosBorrados})


juegos.forEach( (elemento, indice, arr) => {  // imprime la lista de arreglos
    console.log({elemento, indice, arr})
} )

let metroidIndex = juegos.indexOf('Metroid');  // devuelve el valor de la posicion donde encuentra la palabra 
console.log({metroidIndex})
