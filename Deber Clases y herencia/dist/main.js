"use strict";
class MedioTransporte {
    constructor(nombre, capacidad, tiempo, velocidad, nombreConductor) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.tiempo = tiempo;
        this.velocidad = velocidad;
        this.nombreConductor = nombreConductor;
    }
    imprimir() {
        console.log("El nombre del vehiculo es : " + this.nombre);
        console.log("Su capacidad de personas  es de : " + this.capacidad + " personas");
        console.log("El tiempo que se demora es : " + this.tiempo + " horas ");
        console.log("Su velocidad maxima es de : " + this.velocidad + " km");
        console.log("El nombre del condutor del medio de transporte es : " + this.nombreConductor);
    }
}
class Maritimo extends MedioTransporte {
    constructor(nombre, capacidad, tiempo, velocidad, nombreConductor, OceanoCirculacion, NumerodeTurbinas) {
        super(nombre, capacidad, tiempo, velocidad, nombreConductor);
        this.OceanoCirculacion = OceanoCirculacion;
        this.NumerodeTurbinas = NumerodeTurbinas;
    }
    imprimir() {
        super.imprimir();
        console.log("El Oceano donde viaja es el : " + this.OceanoCirculacion);
        console.log("El numero de turbinas es de : " + this.NumerodeTurbinas);
    }
}
class Aereo extends MedioTransporte {
    constructor(nombre, capacidad, tiempo, velocidad, nombreConductor, estado, RuedasAterrizaje) {
        super(nombre, capacidad, tiempo, velocidad, nombreConductor);
        this.estado = estado;
        this.RuedasAterrizaje = RuedasAterrizaje;
    }
    imprimir() {
        super.imprimir();
        console.log("El Avion se encuentra : " + this.estado);
        console.log("El numero de ruedas de aterrizaje es de : " + this.RuedasAterrizaje);
    }
}
class Terrestre extends MedioTransporte {
    constructor(nombre, capacidad, tiempo, velocidad, nombreConductor, placa, puertas, numeroLLantas, tipodeCarro) {
        super(nombre, capacidad, tiempo, velocidad, nombreConductor);
        this.placa = placa;
        this.puertas = puertas;
        this.numeroLlantas = numeroLLantas;
        this.tipodeCarro = tipodeCarro;
    }
    imprimir() {
        super.imprimir();
        console.log("La placa del vehiculo es : " + this.placa);
        console.log("El numero de puertas es  : " + this.puertas);
        console.log("El numero de llantas es de : " + this.numeroLlantas);
        console.log("El tipo de carro es : " + this.tipodeCarro);
    }
}
let maritimo = new Maritimo("Submarino", 5000, 25, 52, "Erick", "Pacifico", 5);
let aereo = new Aereo("Avion Avianca", 62, 2, 280, "Magyori", " despegando", 5);
let terrestre = new Terrestre("Bus", 65, 5, 70, "Leandro", "AAC-1014", 3, 12, "A gasolina");
maritimo.imprimir();
aereo.imprimir();
terrestre.imprimir();
