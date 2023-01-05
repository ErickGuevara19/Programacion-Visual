class Student {
  private name: string = "Sigilfredo";
  private semester: number = 6;
  private course: string = "Fisica";
  private juegoFav:string="PES"
  
  // getters
  public get courses() {
    return this.course;
  }

  public get semesters() {
    return this.semester;
  }

  public get names() {
    return this.name;
  }
  public get juegoFavs(){
    return this.juegoFav;}
    
  
  // setters
  public set courses(thecourse: string) {
    this.course = thecourse;
  }
  public set semesters(thesemester: number) {
    this.semester = thesemester;
  }
  public set names(thename: string) {
    this.name = thename;
  }
  public set juegoFavs(thejuegoFav: string) {
    this.juegoFav= thejuegoFav
  }
  
}

// instanciar objetos
let student = new Student();

// uso de setters
student.courses = "Desarrollo de software";
student.names = "Erick Guevara";
student.semesters = 3;
student.juegoFavs="League of legends";


// uso de getters
console.log("Nombre: " + student.names);
console.log("Curso: " + student.courses);
console.log("Semestre: " + student.semesters);
console.log("Juego Favorito: " + student.juegoFavs);

// hacer superclase figura geometrica
class FiguraGeometrica {
  protected superficie: number = 60;
  protected tipo: string = "Pentágono";

  // getters
  public get superficies() {
    return this.superficie;
  }

  public get tipos() {
    return this.tipo;
  }

  // setters
  public set superficies(superficie: number) {
    this.superficie = superficie;
  }
  public set tipos(tipo: string) {
    this.tipo = tipo;
  }
}

class Circulos extends FiguraGeometrica {
  protected superficie = 25;
  protected tipo = "Ovalo";
  private radio: number = 1.70;

  // getters
  public get superficies() {
    return this.superficie;
  }
  public get radios() {
    return this.radio;
  }

  public get tipos() {
    return this.tipo;
  }

    // setters
  public set superficies(superficie: number) {
    this.superficie = superficie;
  }
  public set radios(radio: number) {
    this.radio = radio;
  }
  public set tipos(tipo: string) {
    this.tipo = tipo;
  }
}

class Triangulos extends FiguraGeometrica {
  protected superficie = 100;
  protected tipo = "Triangulo Equilatero";
  private base: number = 10;
  private altura: number = 25;

    // getters
  public get superficies() {
    return this.superficie;
  }
  public get bases() {
    return this.base;
  }
  public get alturas() {
    return this.altura;
  }

  public get tipos() {
    return this.tipo;
  }

    // setters
  public set superficies(superficie: number) {
    this.superficie = superficie;
  }
  public set bases(base: number) {
    this.base = base;
  }
  public set alturas(altura: number) {
    this.altura = altura;
  }
  public set tipos(tipo: string) {
    this.tipo = tipo;
  }
}

class Rectangulos extends FiguraGeometrica {
  protected superficie = 89.5;
  protected tipo = "Figura desconocida";
  private lado: number = 40;

    // getters
  public get superficies() {
    return this.superficie;
  }
  public get lados() {
    return this.lado;
  }

  public get tipos() {
    return this.tipo;
  }

    // setters
  public set superficies(superficie: number) {
    this.superficie = superficie;
  }
  public set lados(lado: number) {
    this.lado = lado;
  }

  public set tipos(tipo: string) {
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

function mostrarTriangulo(triangulo: Triangulos) {
  console.log(
    "Tipo: " +
      triangulo.tipos +
      "\nSuperficie: " +
      triangulo.superficies +
      "\nAltura: " +
      triangulo.alturas +
      "\nBase: " +
      triangulo.bases
  );
}
function mostrarCirculo(circulo: Circulos) {
  console.log(
    "Tipo: " +
      circulo.tipos +
      "\nSuperficie: " +
      circulo.superficies +
      "\nAltura: " +
      circulo.radios
  );
}

function mostrarRectangulo(rectangulo: Rectangulos) {
  console.log(
    "Tipo: " +
      rectangulo.tipos +
      "\nSuperficie: " +
      rectangulo.superficies +
      "\nAltura: " +
      rectangulo.lados
  );
}
console.log(
  this.mostrarCirculo(circulo),
  this.mostrarRectangulo(rectangulo),
  this.mostrarTriangulo(triangulo)
);