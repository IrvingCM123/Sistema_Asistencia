import { EscanerDatos_Entity } from '../models/Escaner.entity';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EscanerDatos_Port } from 'src/app/config/ports/EscanerDatos/EscanerDatos-port';

@Injectable({
  providedIn: 'root'
})

export class GetEscanerDatosUseCase {

  constructor (private _escanerDatosGateway: EscanerDatos_Port) {}

  getEscanerDatos (nrc: string, diaLista: string) : Promise<Observable<EscanerDatos_Entity>>  {
    return this._escanerDatosGateway.getEscanerDatos(nrc, diaLista);
  }

}

