let a = 10;

if(a >= 10 ){
    console.log('A es mayor a 10');
}
else{
    console.log('A es menor a 10');
}


console.log('Fin de Pograma');

const hoy = new Date();
let dia = hoy.getDay();


console.log(hoy,dia);

if ( dia === 0){   // = asignacion  == revisa el valor pero no importa el tipo de dato === debe ser el mismo valor y mismo tipo de dato
    console.log("es Domingo");
}
else{
    console.log("No es Domingo");
}

// sin usar If else, o Switch. unciamente objetos
dia =  6; // 0: domingo
dialetras= [   // con array
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'Sabado'
];

dialetrasObjet= { // con objetos
    0 : 'domingo',
    1 : 'lunes',
    2 : 'martes',
    3 : 'miercoles',
    4 : 'jueves',
    5 : 'viernes',
    6 : 'Sabado'
};
// dia de la semana 
console.log({dialetras})
console.log(dialetras[dia] || "dia no definido") ; // || valida si es null o indefine 

console.log({dialetrasObjet})
console.log(dialetrasObjet[dia] || "dia no definido" );