/**
* Dias de semana abrimos a las 11,
* Pero los fines de semana abrimos a las 9
*/

//Entrar a un sitio web, para consultar si está abierto hoy...

const dia= 1; // 0: domingo... 1:Lunes...
const horaActual =10;

let horaApertura;
let mensaje;


//if ( dia === 0 || dia === 6){

/*
   if([0,6].includes(dia)) {  // includes valida si un valor esta en el arreglo y devuelve un true
    console.log('Fin de semana');
    horaApertura = 9;
}
else {
    console.log('Dia de semana')
    horaApertura = 11;
}
*/
horaApertura = ([0,6].includes(dia)) ? 9 : 11 ; // operador ternario



/*
if (horaActual >= horaApertura){
    mensaje = 'Esta abierto'
}
else {
    mensaje = `Esta cerrado hoy abrimos ${horaApertura}` 
}
*/
mensaje = (horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado hoy abrimos ${horaApertura}` ;

console.log({horaApertura}, mensaje)