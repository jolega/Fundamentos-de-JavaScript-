
const regresaTrue=() => {
    console.log('Regresa True')
    return true;
}

const regresaFalse=() => {
    console.log('Regresa False')
    return false;
}


console.warn('Not o la negacion');

console.log(true);
console.log(regresaTrue());
console.log(!true);
console.log(!regresaTrue());

console.warn('And') // true si todos los valores son verdaderos
console.log(true && true );
console.log(true && false );
console.log(false && true );
console.log(false && false );



console.log("validacion 1");
regresaTrue() &&   regresaFalse()   // si la primera es verdadera ejecuta la segunda
console.log("validacion 2");
regresaFalse() &&   regresaTrue()   // si la primera es falso NO ejecuta la segunda

console.warn('or') // true si todos los valores son verdaderos
console.log(true || true );
console.log(true || false );
console.log(false || true );
console.log(false || false );

console.log("validacion 1");
regresaTrue() ||   regresaFalse()   // si la primera es verdadera ejecuta No ejecuta la segunda
console.log("validacion 2");
regresaFalse() ||  regresaTrue()   // si la primera es falso  ejecuta la segunda

console.warn('Asignaciones');

const soyUndefined = undefined;
const soynull =null;
const soyfalso= false;

const a1= true &&  'Hola Mundo'; // coge el primer valor
const a2= 'hola' && 'mundo' // coge el primer valor  diferente a null, false, undefine, true
const a3= soyfalso || 'ya no soy falso';

console.log(a1, a2,  a3)