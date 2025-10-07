//aviao
// atributos cor e modelo; método levantar Voo

//objeto literal
let a1 = {
    cor: 'Branco',
    modelo: 'Airbus a380',
    levantarVoo: function() { console.log('Levantar Voo') }
}

//funcao construtora
let AviaoF = function () {
    this.cor = 'Azul'
    this.modelo = 'Boeing 787',
    this.levantarVoo = function() { console.log('Levantar Voo') }
}

let a2 = new AviaoF()

//classe
class AviaoC {
    constructor() {
        this.cor = 'Vermelho'
        this.modelo = 'Embraer E-Jets'
    }

    levantarVoo() {
        console.log('Levantar Voo')
    }
}

let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)