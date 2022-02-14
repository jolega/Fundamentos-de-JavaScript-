function saludar (nombre){ // funcion con argumento
    console.log(arguments) // muestra los parametros enviados a la funcion
    console.log("hola desde mi primera funcion " + nombre);
}



const saludar2 = function(){  // funcion anonima 
    console.log('hola johan');
}

const saludarFlecha = () => { // funcion flecha
    console.log("hola flecha");
}

const saludarFlechaOne = (nombre) => { // funcion flecha opcion agrumento  tipo 1
    console.log("hola flecha "  + nombre);
}

const saludarFlechaTwo = nombre => { // funcion opcion flecha argumento tipo 2
    console.log("hola flecha " + nombre);
}

const saludarFlechaOneReturn = (nombre) => { // funcion flecha opcion agrumento con retorno
    console.log("hola flecha "  + nombre);
    return "retorne";
}


const sumar1 = (numero1, numero2) => {return numero1+numero2}  // fucion normal con varias lineas

const sumar2 = (numero1, numero2) => numero1+numero2 // funcion simple de una sola liena


const getAleatorio =() => Math.random()

saludar("Johan"); // llamado de la funcion 
saludar2(); // llamado de la funcion 
saludarFlecha(); 
saludarFlechaOne("alejandra"); 
saludarFlechaTwo("alejandra"); 
const saludarFlechaOneReturnValue= saludarFlechaOneReturn();
console.log(saludarFlechaOneReturnValue); 
console.log( sumar1(1,2));
console.log( sumar2(1,2));
console.log( getAleatorio());