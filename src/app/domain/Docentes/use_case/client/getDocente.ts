import { Docentes } from '../../models/Docentes.entity';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocentesGateway } from '../../../models/Client/Class/Docentes.Gateway';
import { DocentesPort } from 'src/app/config/ports/Docentes/docentes-ports';

@Injectable({
  providedIn: 'root'
})

export class GetDocenteUseCase {

  constructor (private _docentesGateWay: DocentesPort) {}

  getDocenteByID (id: string) : Observable <Docentes> {
    return this._docentesGateWay.getDocenteByID(id);
  }

}

