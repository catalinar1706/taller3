class Herramientas {
    estado() {
        console.log("Las herramientas son necesarias para tareas de mantenimiento");
    }
}

class HerramientasMecanicas extends Herramientas {
    estado() {
        console.log("Las herramientas mecánicas son básicas y manejables");
    }
}

class HerramientasElectricas extends Herramientas {
    estado() {
        console.log("Las herramientas eléctricas o electrónicas son de alta precisión");
    }
}

const herramienta = new Herramientas();
herramienta.estado();  

const herramientaMecanica = new HerramientasMecanicas();
herramientaMecanica.estado();  

const herramientaElectrica = new HerramientasElectricas();
herramientaElectrica.estado(); 