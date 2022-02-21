// instancia unica de mi clase en todo el programa

class Singleton {

    static instancia;  // importante para singleton por defecto undefine
    nombre = '';

    constructor(nombre= ''){

        if(!!Singleton.instancia){ // es porque la priumera es undefine, true, false
                return  Singleton.instancia;
        }
        Singleton.instancia= this;
        this.nombre= nombre;


    }
}

console.log(Singleton.instancia);
const instancia1 = new Singleton('Iroman');
console.log(instancia1);
console.log(Singleton.instancia);
const instancia2 = new Singleton('Iroman2');
console.log(instancia2);


