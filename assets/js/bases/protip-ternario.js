
/*
const elMayor = (a,b) => {
    return (a > b) ? a : b;
}
*/
const elMayor = (a,b) => (a > b) ? a : b;

const tieneMeambresia = (miembro) => (miembro) ? '2 dolares' : '10 Dolares';


const amigo = true

const amigoArrr =[
      'Peter',
      'Tony',
      'Dr. strage',
      amigo ? 'Thor' : 'Loki',
      elMayor(20,15)
]

const nota = 65; // A+ A B+
const grado = nota >= 95  ? 'A+' :   //if ternario 
              nota >= 90  ? 'A' :
              nota >= 85  ? 'B+' :
              nota >= 80  ? 'B' :
              nota >= 75  ? 'C+' : 'F'

console.log( elMayor(20,15))

console.log( tieneMeambresia(false))

console.log(grado)

console.log( amigoArrr)