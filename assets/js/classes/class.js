

class Persona{

    static _conteo= 0;
    static get conteo(){
        return Persona._conteo + ' instancias'
    }
    static mensaje () {
        console.log ("Hola a todos soy un metodo estatico")
    }

    nombre   = '';
    codigo   = '';
    frase    = '';
    comida   = '';

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin Frase'){
       // console.log('Entro al constructor')
        this.nombre   = nombre;
        this.codigo   = codigo;
        this.frase    = frase;

        Persona._conteo++;
    }

    set setComidaFacorita(comida){
        this.comida= comida.toUpperCase();
    }

    get  getComidaFacorita() {
        return this.comida;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }


    miFrase(){
        this.quienSoy();
        console.log(`Soy ${this.codigo} y mi identidad es ${this.frase}`)
    }
}

const spiderman = new Persona('Peter Parker','Spiderman','Soy tu amigable vecino spiderman');
const Airoman = new Persona('Airoman','agua','Soy tu amigable vecino airoman');
spiderman.setComidaFacorita = 'El pie de cereza de la tia may' 
console.log(spiderman);
console.log(Airoman);
spiderman.quienSoy();
spiderman.miFrase();
console.log(Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje ()

