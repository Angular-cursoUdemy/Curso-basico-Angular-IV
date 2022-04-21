import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Superlópez"];
  heroito: string = "";
  
  
  borrarHeroe() {
    console.log("Borrando...")

    

    // Uso el método slice y me da desde el 2 al 5 del array
    // He añadido un contador para borrar uno cada vez que pulso
    let i: number = 1;
    this.heroito = this.heroes [0] || '';
    this.heroes = this.heroes.slice(i,5);
    i ++;
    // todo esto se puede hacer con
    //this.heroito = this.heroes.shift() || '';  
  }
}

