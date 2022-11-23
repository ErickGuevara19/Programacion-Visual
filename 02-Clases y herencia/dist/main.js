"use strict";
document.write("Clases y Herencia con typescript");
class Persona {
    constructor(nombre, identificacion, edad, direccion) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.edad = edad;
        this.direccion = direccion;
    }
    imprimir() {
        console.log("Su nombre es: " + this.nombre);
        console.log("Su identificacion es: " + this.identificacion);
        console.log("Edad: " + this.edad);
        console.log("Su direccion: " + this.direccion);
    }
}
class Docente extends Persona {
    //sueldo : calcular el dueldo del docente es de 500 dolares y la hora extra vale $10
    constructor(nombre, identificacion, edad, direccion, numeroSeguro, titulo, sueldo, numeroHorasextra) {
        super(nombre, identificacion, edad, direccion);
        this.numeroSeguro = numeroSeguro;
        this.titulo = titulo;
        this.sueldo = sueldo;
        this.numeroHorasextra = numeroHorasextra;
    }
    imprimir() {
        super.imprimir();
        console.log("Seguro :" + this.numeroSeguro);
        console.log("Su titulo es de :" + this.titulo);
        let numeroHorasextra = 30;
        let sueldoHorasExtras = 0;
        let salariofinal = 0;
        let salario = 500;
        if (numeroHorasextra >= 0) {
            sueldoHorasExtras = numeroHorasextra * 10;
            salariofinal = sueldoHorasExtras + salario;
        }
        console.log("El valor de horas extras es: " + numeroHorasextra);
        console.log("El valor del sueldo extra por las horas extras es: " + sueldoHorasExtras + "$");
        console.log("El valor del sueldo total es de : " + salariofinal + "$");
    }
}
class Estudiante extends Persona {
    constructor(nombre, identificacion, edad, direccion, numeroMatricula, nivel) {
        super(nombre, identificacion, edad, direccion);
        this.numeroMatricula = numeroMatricula;
        this.nivel = nivel;
    }
    imprimir() {
        super.imprimir();
        console.log("Matricula es :" + this.numeroMatricula);
        console.log("Su nivel es de : " + this.nivel);
    }
}
let persona = new Persona("Erick", "1752378099", 20, "calderon");
let docente = new Docente("Yolanda", "455722", 25, "aji", 17, "Arquitecto", 500, 10);
let estudiane = new Estudiante("Juan", "17521", 20, "carapungo", 152211, "tercero");
persona.imprimir();
docente.imprimir();
estudiane.imprimir();
/*
//document.write(Docente)
console.log(docente.numeroSeguro, docente.titulo);
console.log(estudiane.numeroMatricula, estudiane.nivel)*/
// tarea 2 : crear una clase "transporte" y tres subclases "aereo", "maritimo","terrestre"
