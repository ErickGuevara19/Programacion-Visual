"use strict";
class automovil {
    constructor() {
        this.modelo = 2018;
        this.fabricante = "Leonel Messi";
        this.numeroLlantas = 5;
        this.marca = "BMW";
    }
    conducir() {
        console.log("El vehiculo esta siendo conducido");
    }
    encender() {
        console.log("El vehiculo esta encendido");
    }
    acelerar() {
        console.log("El vehiculo esta orendiendo motores");
    }
    apagar() {
        console.log("El vehiculo esta mimiendo");
    }
    abrircajuela() {
        console.log("Se abrio el lugar de la mosa del automovil");
    }
}
class Camion {
    constructor() {
        this.modelo = 2022;
        this.fabricante = "Cristiano Ronaldo";
        this.numeroLlantas = 10;
        this.marca = "Ford";
    }
    conducir() {
        console.log("El camion esta siendo conducido");
    }
    encender() {
        console.log("El camion esta encendido");
    }
    acelerar() {
        console.log("El camion esta quemando los motores");
    }
    apagar() {
        console.log("El camion esta descanzando");
    }
    cargar() {
        console.log("El camion esta cargado a su maxima capacidad");
    }
}
class Camioneta {
    constructor() {
        this.modelo = 2019;
        this.fabricante = "Leandro Guevara";
        this.numeroLlantas = 6;
        this.marca = "Nissan";
        this.batex = 20;
    }
    conducir() {
        console.log("La camioneta  esta siendo conducida por la carretera");
    }
    encender() {
        console.log("La camioneta esta encendido");
    }
    acelerar() {
        console.log("La camioneta esta quemando los motores para correr");
    }
    apagar() {
        console.log("La camioneta esta descanzando");
    }
    transporte() {
        console.log("La camioneta esta siendo cargada de medicina");
    }
}
class Yate {
    constructor() {
        this.modelo = 2018;
        this.fabricante = "Jorge Guevara";
        this.numeroTurbinas = 20;
        this.marca = "Suneeker";
        this.medida = 180;
    }
    navegar() {
        console.log("El yate esta en el puerto esperando a sus huespedes");
    }
    encender() {
        console.log("El yate esta calentando las turbinas");
    }
    acelerar() {
        console.log("El yate esta alcanzando su velocidad maxima");
    }
    apagar() {
        console.log("El yate esta tomando el sol");
    }
    pasajeros() {
        console.log("El yate esta en su capacidad maxima de pasajeros");
    }
}
class Velero {
    constructor() {
        this.modelo = 2012;
        this.fabricante = "Lucia Davila";
        this.numeroTurbinas = 0;
        this.marca = "Beneteau";
        this.velas = 2;
    }
    navegar() {
        console.log("El velero esta en una competicion en el mar Pacifico");
    }
    encender() {
        console.log("El velero esta alistando sus velas");
    }
    acelerar() {
        console.log("El velero comenzo a navegar");
    }
    apagar() {
        console.log("El velero destemplo sus velas");
    }
    Kilometrar() {
        console.log("El velero recorrio 250km");
    }
}
class Avion {
    constructor() {
        this.modelo = 2012;
        this.fabricante = "Gumayushi";
        this.marca = "SKT T1";
        this.alcanceDespegue = 5000;
        this.clases = 3;
    }
    volar() {
        console.log("El avion esta en encima de Cataluña");
    }
    encender() {
        console.log("El avion prendio los moteres y desplego sus alas");
    }
    acelerar() {
        console.log("El avion esta recorriendo la pista de despegue");
    }
    apagar() {
        console.log("El avion se quedo en el angar");
    }
    recepcionar() {
        console.log("El avion recibira 75 boletos entre las dos clases");
    }
}
class Avioneta {
    constructor() {
        this.modelo = 2010;
        this.fabricante = "Faker";
        this.marca = "Blood Line";
        this.alcanceDespegue = 700;
        this.revoluciones = 500;
    }
    volar() {
        console.log("La avioneta esta en encima de Seul");
    }
    encender() {
        console.log("La avioneta prendio los moteres y desplego sus alas");
    }
    acelerar() {
        console.log("La avioneta esta recorriendo la pista de despegue");
    }
    apagar() {
        console.log("La avioneta se quedo mimiendo en el angar");
    }
    tirarse() {
        console.log("En la avioneta se tiraran 10 personas de paracaidas");
    }
}
function procesar(vehiculoTerrestre) {
    vehiculoTerrestre.encender();
    vehiculoTerrestre.conducir();
    vehiculoTerrestre.acelerar();
}
let autosmovil = new automovil();
console.log("El numero de llantas es : " + autosmovil.numeroLlantas);
console.log("El año del vehiculo es: " + autosmovil.modelo);
console.log("El nombre del fabricante es : " + autosmovil.fabricante);
console.log("La marca del vehiculo es : " + autosmovil.marca);
autosmovil.conducir();
autosmovil.encender();
autosmovil.acelerar();
autosmovil.apagar();
autosmovil.abrircajuela();
let camion = new Camion();
console.log("El vehiculo es un Camion");
console.log("El numero de llantas es de : " + camion.numeroLlantas);
console.log("El año de fabricacion del camion es del : " + camion.modelo);
console.log("El fabricante del camion es : " + camion.fabricante);
console.log("La marca del camion es  : " + camion.marca);
camion.conducir();
camion.encender();
camion.acelerar();
camion.apagar();
camion.cargar();
let camioneta = new Camioneta();
console.log("El vehiculo es una Camioneta");
console.log("El numero de llantas es de : " + camioneta.numeroLlantas);
console.log("El año de fabricacion del camion es del : " + camioneta.modelo);
console.log("El fabricante del camion es : " + camioneta.fabricante);
console.log("La marca del camion es  : " + camioneta.marca);
console.log("La medida de la caja de la camioneta es de: " + camioneta.batex + "m");
camioneta.conducir();
camioneta.encender();
camioneta.acelerar();
camioneta.apagar();
camioneta.transporte();
let yate = new Yate();
console.log("El vehiculo es una Yate");
console.log("El numero de turbinas es de : " + yate.numeroTurbinas);
console.log("El año de fabricacion del camion es del : " + yate.modelo);
console.log("El fabricante del yate es : " + yate.fabricante);
console.log("La marca del yate es  : " + yate.marca);
console.log("La medida del yate  es de: " + yate.medida + "m");
yate.navegar();
yate.encender();
yate.acelerar();
yate.apagar();
yate.pasajeros();
let velero = new Velero();
console.log("El vehiculo es una Velero");
console.log("El numero de turbinas es de : " + velero.numeroTurbinas);
console.log("El año de fabricacion del velero es del : " + velero.modelo);
console.log("El fabricante del velero es : " + velero.fabricante);
console.log("La marca del velero es : " + velero.marca);
console.log("El numero de velas es de: " + velero.velas);
velero.navegar();
velero.encender();
velero.acelerar();
velero.apagar();
velero.Kilometrar();
let avion = new Avion();
console.log("El vehiculo es un avion");
console.log("La altura en la que se desplazara sera de : " + avion.alcanceDespegue + " kilometros de altura");
console.log("El año de fabricacion del avion es del : " + avion.modelo);
console.log("El fabricante del avion es : " + avion.fabricante);
console.log("La marca del avion es : " + avion.marca);
console.log("El avion cuenta con: " + avion.clases + "tipos de clases");
avion.volar();
avion.encender();
avion.acelerar();
avion.apagar();
avion.recepcionar();
let avioneta = new Avioneta();
console.log("El vehiculo es una avioneta");
console.log("La altura en la que se desplazara sera de : " + avioneta.alcanceDespegue + " kilometros de altura");
console.log("El año de fabricacion de la avioneta es del : " + avioneta.modelo);
console.log("El fabricante de la avioneta es : " + avioneta.fabricante);
console.log("La marca de la avioneta es : " + avioneta.marca);
console.log("El motopropulsor gira a : " + avioneta.revoluciones + " revoluciones por minuto");
avioneta.volar();
avioneta.encender();
avioneta.acelerar();
avioneta.apagar();
avioneta.tirarse();
//Crear clase camion camioneta yate velero avion y avioneta
