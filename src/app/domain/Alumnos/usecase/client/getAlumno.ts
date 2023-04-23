import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Alumnos } from '../../models/Alumnos.entity';
import { AlumnosPort } from 'src/app/config/ports/Alumnos/alumnos-ports';

@Injectable({
  providedIn: 'root'
})
export class GetAlumnoUseCase {

  constructor (private _alumnosGateway: AlumnosPort) {}

  getAlumnoByID (id: string) : Observable <Alumnos> {
    return this._alumnosGateway.getAlumnosByID(id);
  }

}
