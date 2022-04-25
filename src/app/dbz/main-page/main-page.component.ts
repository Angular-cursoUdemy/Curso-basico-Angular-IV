import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  
  nuevo: Personaje = {
    nombre: 'Maestro',
    poder : 2000

  }
  get personajes():Personaje []{
    return this.dbzService.personajes;
  }
  agregarNuevoPersonaje(evento:Personaje){
    //console.log(MainPageComponent);
    //console.log (argumento);
    this.personajes.push( evento )
  }
  constructor(private dbzService:DbzService){}
  
  }

  /*
  nuevo:Personaje ={
    nombre: '',
    poder: 0 
  }

  agregar(){
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
  console.log(this.nuevo)

    this.personajes.push(this.nuevo);
    this.nuevo = { nombre: "", poder: 0}

  }
  */

