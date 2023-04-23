import { Listas_Entity } from '../../models/Listas.entity';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListasPort } from 'src/app/config/ports/listas/listas-ports';
import { ListasGateway } from 'src/app/domain/models/Client/Class/Listas.Gateway';

@Injectable({
  providedIn: 'root'
})

export class GetListasUseCase {

  constructor (private _listasGateway: ListasPort) {}

  getListaByID (id: string) : Observable <Listas_Entity> {
    return this._listasGateway.getListaByID(id);
  }


}

