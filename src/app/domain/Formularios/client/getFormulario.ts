import { Cuentas_Entity } from '../models/Formulario.entity';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuentasPort } from 'src/app/config/ports/Formularios/formulario-ports';

@Injectable({
  providedIn: 'root'
})

export class PostCuentasUseCase {

  constructor(private cuentasGateway: CuentasPort) {}

  postCuentas(Contenido : any ): Observable<Cuentas_Entity> {
    return this.cuentasGateway.postCuentas(Contenido);
  }

}
