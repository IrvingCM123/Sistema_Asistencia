import { ListaAsistencia_Entity } from '../models/ListaAsistencia.entity';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaAsistencia_Port } from 'src/app/config/ports/ListaAsistencia/ListaAsistencia-ports';

@Injectable({
  providedIn: 'root'
})

export class GetListaAsistenciaUseCase {

  constructor (private _listaAsistenciaGateway: ListaAsistencia_Port) {}

  getListaAsistenciaByNrcCarrera (nrc: string, carrera: string) : Promise<Observable<ListaAsistencia_Entity>>  {
    return this._listaAsistenciaGateway.getListaAsistenciaByNrcCarrera(nrc, carrera);
  }

  getCantidadListaAsistencia (nrc: string, carrera: string) : Promise<Observable<Number>>  {
    return this._listaAsistenciaGateway.getCantidadListaAsistencia(nrc, carrera);
  }
}

