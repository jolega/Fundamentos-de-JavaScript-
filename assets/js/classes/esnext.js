

class Rectangulo {
    #area=0;   //#indica el atributo es privado no esta en todos los navegadores 

    constructor(base =0, altura =0){
        this.base    = base;
        this.altura  = altura;

        this.#area    = base * altura
    }
}

const rectangulo = new Rectangulo(10,15);
//rectangulo.#area=100;


console.log(rectangulo);