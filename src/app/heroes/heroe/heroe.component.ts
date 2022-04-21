import { Component } from "@angular/core";

@Component({

    selector: 'app-heroe',
    //Se selecciona el html del mismo directorio en este caso por eso se va a usar templateUrl
    templateUrl: 'heroe.component.html'})



export class HeroeComponent{
    nombre: string = "Ironman";
    edad  : number = 45;

    get capitalName(): string{
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;
    //es lo mismo que:
    //return this.nombre + " " + this.edad.toString
    }

    cambiarNombre(): void {
        this.nombre = "Spiderman";
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}