

const carros = ['Ford','Mazda','Honda','Toyota'];

let i=0;

while(i < carros.length){

    console.log(carros[i]);
    i++;

}
console.log("")
// se considera  falso  los valores undefined ,null, false 
i=0;
while(i < carros.length){
    if(i === 1 ){
        break;
    }
    console.log(carros[i]);
    i++;

}
console.log("")
i=0;
while(i < carros.length){
    if(i === 1 ){
        i++
        continue;
    }
    console.log(carros[i]);
    i++;

}

console.log("")
console.log("Ciclo do while")
let j=0;
do{
    console.log(carros[j]);
    j++
}while(carros[j]) // termina en undefined