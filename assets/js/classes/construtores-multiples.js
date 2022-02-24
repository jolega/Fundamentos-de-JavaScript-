
class Persona {

    static porObjeto ({nombre, apellido, pais}) {  //{nombre, apellido, pais} destructuracion de objetos  e instancias de varias formas soluciona multiples contrusctores

        return new Persona(nombre, apellido, pais )

    }

    constructor(nombre, apellido, pais){

        this.nombre         = nombre;
        this.apellido       =apellido;
        this.pais           =pais;
    }

    getInfo(){
        console.log(`info;  ${ this.nombre }, ${ this.apellido }, ${ this.pais }`)
    }
}

const nombre1           = 'Melissa',
      apellido1         = 'Flores'
      pais1              = 'Honduras'

const fher = {
    nombre:     'Fernando',
    apellido:   'Herrera',
    pais:       'Consta rica'
}


const persona1 = new Persona (nombre1, apellido1,  pais1)
const persona2 = Persona.porObjeto(fher)

persona1.getInfo();
persona2.getInfo();