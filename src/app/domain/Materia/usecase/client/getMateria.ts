import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Materias } from '../../models/Materias.entity';
import { MateriasGateway } from '../../../models/Client/Class/Materias.Gateway';
import { MateriasPort } from 'src/app/config/ports/Materias/materias-port';

@Injectable({
  providedIn: 'root'
})

export class GetMateriaUseCase {

  constructor (private _materiasGateWay: MateriasPort) {}

  getMateriasAll () : Observable <Array<Materias>> {
    return this._materiasGateWay.getMateriasAll();
  }

}

