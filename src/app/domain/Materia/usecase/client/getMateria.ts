import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Materias, NRC } from '../../models/Materias.entity';
import { MateriasPort } from 'src/app/config/ports/Materias/materias-port';

@Injectable({
  providedIn: 'root'
})

export class GetMateriaUseCase {

  constructor (private _materiasGateWay: MateriasPort) {}

  getMateriasAll (nrc: string | any) : Observable <Array<Materias>> {
    return this._materiasGateWay.getMateriasAll(nrc);
  }

  getNRCMaterias (numero_personal: string) : Observable <NRC> {
    return this._materiasGateWay.getNRCMaterias(numero_personal);
  }

}

