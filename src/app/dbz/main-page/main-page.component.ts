import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  nuevo: Personaje= {
    nombre: 'Maestro Roshi',
    poder: 100
  }

  constructor () {}

}
