import { Formularios_Entity } from '../models/Formulario.entity';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormularioPort } from 'src/app/config/ports/Formularios/formulario-ports';

@Injectable({
  providedIn: 'root'
})

export class GetFormularioUseCase {

  constructor(private formularioGateway: FormularioPort) {}

  postFormulario(Contenido : any): Observable<Formularios_Entity> {
    return this.formularioGateway.postFormulario(Contenido);
  }

}
