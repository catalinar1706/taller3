class Panaderia {
    constructor(tipo, insumo, cantidad, costo) {
        this.tipo = tipo;
        this.insumo = insumo;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    getInsumo() {
        return this.insumo;
    }

    setInsumo(insumo) {
        this.insumo = insumo;
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }

    getCosto() {
        return this.costo;
    }

    setCosto(costo) {
        this.costo = costo;
    }

    info() {
        console.log("Información general de la panadería.");
    }
}

class PanBlanco extends Panaderia {
    constructor(insumo, cantidad, costo) {
        super("Pan Blanco", insumo, cantidad, costo);
    }

    info() {
        console.log("El Pan Blanco es un tipo de pan hecho con harina refinada.");
    }
}

class PanIntegral extends Panaderia {
    constructor(insumo, cantidad, costo) {
        super("Pan Integral", insumo, cantidad, costo);
    }

    info() {
        console.log("El Pan Integral es un tipo de pan hecho con harina integral.");
    }
}

// Instanciación y uso de las clases
const panBlanco = new PanBlanco("Harina Refinada", 100, 50);
console.log(panBlanco.getTipo());  
console.log(panBlanco.getInsumo());  
console.log(panBlanco.getCantidad());  
console.log(panBlanco.getCosto());  
panBlanco.info(); 

const panIntegral = new PanIntegral("Harina Integral", 80, 60);
console.log(panIntegral.getTipo());  
console.log(panIntegral.getInsumo());  
console.log(panIntegral.getCantidad());  
console.log(panIntegral.getCosto());  
panIntegral.info();