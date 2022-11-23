
let edad :number=20;
export class Persona{
    nombre:string;
    identificacion:number;
    constructor(nombre:string, identificacion:number) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        
    }
    mostrarPersona(){
        console.log("Nombre: "+ this.nombre + " Identificacion: "+ this.identificacion)
    }

}
let empresaTrabaja: string = "Fabrica"
let persona:string ="Erick"