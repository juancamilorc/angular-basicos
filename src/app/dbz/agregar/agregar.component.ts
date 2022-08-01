import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor (private dbzService: DbzService) {

  }

  // @Output() onNuevoPersona: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if(this.nuevo.nombre.trim().length === 0) {return;}

    // this.onNuevoPersona.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
