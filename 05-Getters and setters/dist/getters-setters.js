"use strict";
class Student {
    constructor() {
        this.name = "Sigilfredo";
        this.semester = 6;
        this.course = "Fisica";
        this.juegoFav = "PES";
    }
    // getters
    get courses() {
        return this.course;
    }
    get semesters() {
        return this.semester;
    }
    get names() {
        return this.name;
    }
    get juegoFavs() {
        return this.juegoFav;
    }
    // setters
    set courses(thecourse) {
        this.course = thecourse;
    }
    set semesters(thesemester) {
        this.semester = thesemester;
    }
    set names(thename) {
        this.name = thename;
    }
    set juegoFavs(thejuegoFav) {
        this.juegoFav = thejuegoFav;
    }
}
// instanciar objetos
let student = new Student();
// uso de setters
student.courses = "Desarrollo de software";
student.names = "Erick Guevara";
student.semesters = 3;
student.juegoFavs = "League of legends";
// uso de getters
console.log("Nombre: " + student.names);
console.log("Curso: " + student.courses);
console.log("Semestre: " + student.semesters);
console.log("Juego Favorito: " + student.juegoFavs);
// hacer superclase figura geometrica
class FiguraGeometrica {
    constructor() {
        this.superficie = 60;
        this.tipo = "Pentágono";
    }
    // getters
    get superficies() {
        return this.superficie;
    }
    get tipos() {
        return this.tipo;
    }
    // setters
    set superficies(superficie) {
        this.superficie = superficie;
    }
    set tipos(tipo) {
        this.tipo = tipo;
    }
}
class Circulos extends FiguraGeometrica {
    constructor() {
        super(...arguments);
        this.superficie = 25;
        this.tipo = "Ovalo";
        this.radio = 1.70;
    }
    // getters
    get superficies() {
        return this.superficie;
    }
    get radios() {
        return this.radio;
    }
    get tipos() {
        return this.tipo;
    }
    // setters
    set superficies(superficie) {
        this.superficie = superficie;
    }
    set radios(radio) {
        this.radio = radio;
    }
    set tipos(tipo) {
        this.tipo = tipo;
    }
}
class Triangulos extends FiguraGeometrica {
    constructor() {
        super(...arguments);
        this.superficie = 100;
        this.tipo = "Triangulo Equilatero";
        this.base = 10;
        this.altura = 25;
    }
    // getters
    get superficies() {
        return this.superficie;
    }
    get bases() {
        return this.base;
    }
    get alturas() {
        return this.altura;
    }
    get tipos() {
        return this.tipo;
    }
    // setters
    set superficies(superficie) {
        this.superficie = superficie;
    }
    set bases(base) {
        this.base = base;
    }
    set alturas(altura) {
        this.altura = altura;
    }
    set tipos(tipo) {
        this.tipo = tipo;
    }
}
class Rectangulos extends FiguraGeometrica {
    constructor() {
        super(...arguments);
        this.superficie = 89.5;
        this.tipo = "Figura desconocida";
        this.lado = 40;
    }
    // getters
    get superficies() {
        return this.superficie;
    }
    get lados() {
        return this.lado;
    }
    get tipos() {
        return this.tipo;
    }
    // setters
    set superficies(superficie) {
        this.superficie = superficie;
    }
    set lados(lado) {
        this.lado = lado;
    }
    set tipos(tipo) {
        this.tipo = tipo;
    }
}
// instanciacion de objetos
let rectangulo = new Rectangulos();
rectangulo.tipos = "Rectangulo";
rectangulo.lados = 4;
rectangulo.superficies = 25;
let triangulo = new Triangulos();
triangulo.tipos = "Triangulo Isoceles";
triangulo.superficies = 120;
triangulo.bases = 30;
triangulo.alturas = 3;
let circulo = new Circulos();
circulo.tipos = "Circulo";
circulo.radios = 50;
circulo.superficies = 200;
function mostrarTriangulo(triangulo) {
    console.log("Tipo: " +
        triangulo.tipos +
        "\nSuperficie: " +
        triangulo.superficies +
        "\nAltura: " +
        triangulo.alturas +
        "\nBase: " +
        triangulo.bases);
}
function mostrarCirculo(circulo) {
    console.log("Tipo: " +
        circulo.tipos +
        "\nSuperficie: " +
        circulo.superficies +
        "\nAltura: " +
        circulo.radios);
}
function mostrarRectangulo(rectangulo) {
    console.log("Tipo: " +
        rectangulo.tipos +
        "\nSuperficie: " +
        rectangulo.superficies +
        "\nAltura: " +
        rectangulo.lados);
}
console.log(this.mostrarCirculo(circulo), this.mostrarRectangulo(rectangulo), this.mostrarTriangulo(triangulo));
