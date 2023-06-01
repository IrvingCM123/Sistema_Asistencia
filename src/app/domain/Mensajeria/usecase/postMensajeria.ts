import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Mensajeria_Entity } from '../models/Mensajeria.entity';
import { MensajeriaPort } from 'src/app/config/ports/Mensajeria/Mensajeria-ports';

@Injectable({
  providedIn: 'root'
})

export class GetMensajeriaUseCase {

  constructor (private _mensajeriaGateWay: MensajeriaPort) {}

  postMensajeria (Mensaje: any | string) : Observable<Mensajeria_Entity> {
    return this._mensajeriaGateWay.postMensajeria(Mensaje);
  }

}

