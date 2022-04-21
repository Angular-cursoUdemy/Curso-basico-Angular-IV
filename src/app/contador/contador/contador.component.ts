import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
    <h1>Hola Mundo</h1>
    <h2> {{ titulo }} </h2>
    <h3> La base es: <strong> {{base}} </strong> </h3>


    <button (click)=" acumular  ( + base);"> + {{ base }} </button>
    <span> {{numero}} </span>
    <button (click)=" acumular ( -1 * base);"> - {{ base }} </button>
    `
})

export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero : number = 10;

    public base: number = 5;

    acumular (recibeNumero: number){
    this.numero += recibeNumero;
    
  }
}