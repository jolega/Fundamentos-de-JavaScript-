let personaje ={
     nombre: 'Tony Stark',
     condeName: 'Iroman',
     vivo : false,
     edad: 40,
     coords: {
         lat: 340.34,
         leng: -118.70

     },
      trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
      direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }

};
console.log(personaje);
console.log('Nombre', personaje.nombre);  // imprime la prpiedad del objeto 
console.log('Nombre', personaje['nombre' ]); // imprime la prpiedad del objeto 
console.log('coords', personaje['coords' ].lat); // imprime la propiedad del objeto 
console.log('tamaño de trajes', personaje['trajes' ].length); // imprime el tamaño de los trajes
console.log('ultimo traje', personaje['trajes' ][[personaje['trajes' ].length - 1 ]]); // imprime el tamaño de los trajes


const x = 'vivo';

console.log('Vivo', personaje[x])

// mas detalles

delete personaje.edad; // elimina  atributos en personaje 
console.log(personaje);

personaje.casado = true ; // crea el atributo en personaje
console.log(personaje);

const entriesPares= Object.entries(personaje); // crear una varible con pares de cada atributo
console.log(entriesPares);

Object.freeze( personaje) // congela los atributos principales del objeto no se pueden modificar

const propiedades = Object.getOwnPropertyNames(personaje); // muestra los atributos del objeto
console.log({propiedades})

const valores = Object.values(personaje); // muestra los valores de los atributos 
console.log({propiedades,valores})

// documentacion  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object