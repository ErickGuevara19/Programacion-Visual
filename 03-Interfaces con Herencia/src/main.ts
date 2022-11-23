
interface Vehiculo{
    modelo:number;
    fabricante:string;
    encender():void;
    acelerar():void;
    apagar():void;

}
interface vehiculoTerrestre extends Vehiculo{
    numeroLlantas :number;
    conducir():void;

}
interface vehiculoMaritimo extends Vehiculo{
    numeroTurbinas:number;
    navegar():void;


}
interface vehiculoAereo extends Vehiculo{
    alcanceDespegue:number;
    volar():void;
    
}
class automovil implements vehiculoTerrestre{
    modelo:number = 2018;
    fabricante:string ="Leonel Messi";
    numeroLlantas=5;
    marca:string= "BMW"; 
    conducir(): void {
        console.log("El vehiculo esta siendo conducido");
    }
    encender(): void {
        console.log("El vehiculo esta encendido");
    }
    acelerar(): void {
        console.log("El vehiculo esta orendiendo motores");
    }
    apagar(): void {
        console.log("El vehiculo esta mimiendo");
    }
    abrircajuela():void{
        console.log("Se abrio el lugar de la mosa del automovil");

    }
    
}
class Camion implements vehiculoTerrestre{
    modelo:number = 2022;
    fabricante:string ="Cristiano Ronaldo";
    numeroLlantas=10;
    marca:string= "Ford"; 
    conducir(): void {
        console.log("El camion esta siendo conducido");
    }
    encender(): void {
        console.log("El camion esta encendido");
    }
    acelerar(): void {
        console.log("El camion esta quemando los motores");
    }
    apagar(): void {
        console.log("El camion esta descanzando");
    }
    cargar():void{
        console.log("El camion esta cargado a su maxima capacidad");

    }
    

}
class Camioneta implements vehiculoTerrestre{
    modelo:number = 2019;
    fabricante:string ="Leandro Guevara";
    numeroLlantas=6;
    marca:string= "Nissan";
    batex: number = 20;
    conducir(): void {
        console.log("La camioneta  esta siendo conducida por la carretera");
    }
    encender(): void {
        console.log("La camioneta esta encendido");
    }
    acelerar(): void {
        console.log("La camioneta esta quemando los motores para correr");
    }
    apagar(): void {
        console.log("La camioneta esta descanzando");
    }
    transporte():void{
        console.log("La camioneta esta siendo cargada de medicina");

    }
    

}
class Yate implements vehiculoMaritimo{
    modelo:number = 2018;
    fabricante:string ="Jorge Guevara";
    numeroTurbinas=20;
    marca:string= "Suneeker";
    medida: number = 180;

    navegar(): void {
        console.log("El yate esta en el puerto esperando a sus huespedes");
    }
    encender(): void {
        console.log("El yate esta calentando las turbinas");
    }
    acelerar(): void {
        console.log("El yate esta alcanzando su velocidad maxima");
    }
    apagar(): void {
        console.log("El yate esta tomando el sol");
    }
    pasajeros():void{
        console.log("El yate esta en su capacidad maxima de pasajeros");

    }
    

}
class Velero implements vehiculoMaritimo{
    modelo:number = 2012;
    fabricante:string ="Lucia Davila";
    numeroTurbinas=0;
    marca:string= "Beneteau";
    velas: number = 2;

    navegar(): void {
        console.log("El velero esta en una competicion en el mar Pacifico");
    }
    encender(): void {
        console.log("El velero esta alistando sus velas");
    }
    acelerar(): void {
        console.log("El velero comenzo a navegar");
    }
    apagar(): void {
        console.log("El velero destemplo sus velas");
    }
    Kilometrar():void{
        console.log("El velero recorrio 250km");

    }
    

}
class Avion implements vehiculoAereo{
    modelo:number = 2012;
    fabricante:string ="Gumayushi";
    marca:string= "SKT T1";
    alcanceDespegue: number =5000;
    clases :number = 3;

    volar(): void {
        console.log("El avion esta en encima de Cataluña");
    }
    encender(): void {
        console.log("El avion prendio los moteres y desplego sus alas");
    }
    acelerar(): void {
        console.log("El avion esta recorriendo la pista de despegue");
    }
    apagar(): void {
        console.log("El avion se quedo en el angar");
    }
    recepcionar():void{
        console.log("El avion recibira 75 boletos entre las dos clases");

    }
    

}
class Avioneta implements vehiculoAereo{
    modelo:number = 2010;
    fabricante:string ="Faker";
    marca:string= "Blood Line";
    alcanceDespegue: number =700;
    revoluciones: number = 500;

    volar(): void {
        console.log("La avioneta esta en encima de Seul");
    }
    encender(): void {
        console.log("La avioneta prendio los moteres y desplego sus alas");
    }
    acelerar(): void {
        console.log("La avioneta esta recorriendo la pista de despegue");
    }
    apagar(): void {
        console.log("La avioneta se quedo mimiendo en el angar");
    }
    tirarse():void{
        console.log("En la avioneta se tiraran 10 personas de paracaidas");

    }
    

}

function procesar(vehiculoTerrestre:vehiculoTerrestre){
    vehiculoTerrestre.encender();
    vehiculoTerrestre.conducir();
    vehiculoTerrestre.acelerar();
    

    
}

let autosmovil = new automovil();
console.log("El numero de llantas es : " +autosmovil.numeroLlantas);
console.log("El año del vehiculo es: "+autosmovil.modelo);
console.log("El nombre del fabricante es : "+autosmovil.fabricante);
console.log("La marca del vehiculo es : "+autosmovil.marca);

autosmovil.conducir();
autosmovil.encender();
autosmovil.acelerar();
autosmovil.apagar();
autosmovil.abrircajuela();

let camion = new Camion();
console.log("El vehiculo es un Camion");
console.log("El numero de llantas es de : "+ camion.numeroLlantas);
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
console.log("El numero de llantas es de : "+ camioneta.numeroLlantas);
console.log("El año de fabricacion del camion es del : " + camioneta.modelo);
console.log("El fabricante del camion es : " + camioneta.fabricante);
console.log("La marca del camion es  : " + camioneta.marca);
console.log("La medida de la caja de la camioneta es de: " + camioneta.batex + "m")


camioneta.conducir();
camioneta.encender();
camioneta.acelerar();
camioneta.apagar();
camioneta.transporte();

let yate = new Yate();
console.log("El vehiculo es una Yate");
console.log("El numero de turbinas es de : "+yate.numeroTurbinas);
console.log("El año de fabricacion del camion es del : " + yate.modelo);
console.log("El fabricante del yate es : " + yate.fabricante);
console.log("La marca del yate es  : " + yate.marca);
console.log("La medida del yate  es de: " + yate.medida+ "m")


yate.navegar();
yate.encender();
yate.acelerar();
yate.apagar();
yate.pasajeros();

let velero = new Velero();
console.log("El vehiculo es una Velero");
console.log("El numero de turbinas es de : "+velero.numeroTurbinas);
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
console.log("La altura en la que se desplazara sera de : "+avion.alcanceDespegue+ " kilometros de altura");
console.log("El año de fabricacion del avion es del : " + avion.modelo);
console.log("El fabricante del avion es : " + avion.fabricante);
console.log("La marca del avion es : " +avion.marca);
console.log("El avion cuenta con: "+ avion.clases + "tipos de clases" );


avion.volar();
avion.encender();
avion.acelerar();
avion.apagar();
avion.recepcionar();

let avioneta = new Avioneta();
console.log("El vehiculo es una avioneta");
console.log("La altura en la que se desplazara sera de : "+avioneta.alcanceDespegue+ " kilometros de altura");
console.log("El año de fabricacion de la avioneta es del : " + avioneta.modelo);
console.log("El fabricante de la avioneta es : " + avioneta.fabricante);
console.log("La marca de la avioneta es : " +avioneta.marca);
console.log("El motopropulsor gira a : "+ avioneta.revoluciones +" revoluciones por minuto");


avioneta.volar();
avioneta.encender();
avioneta.acelerar();
avioneta.apagar();
avioneta.tirarse();
//Crear clase camion camioneta yate velero avion y avioneta