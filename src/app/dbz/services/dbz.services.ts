import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personajes:Personaje[] = [{
        nombre: "Goku",
        poder : 12000
      },
      {
        nombre:'Maolo',
        poder:120
      }
    ];

    get personajes():Personaje[]{
        return [...this._personajes];
    }
    constructor() {
        
    }
    agregarPersonaje( nuevoPersonaje: Personaje){

        this._personajes.push ( nuevoPersonaje );
    }

}