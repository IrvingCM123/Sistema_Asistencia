import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { GetFormularioUseCase } from 'src/app/domain/Formularios/client/getFormulario';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {
  apiUrl = environment.apiMensaje;

  constructor(private formulario : GetFormularioUseCase) {}

  enviarOperacionPorCorreo(operacion: any) {
    return this.formulario.postFormulario(operacion);
  }

  private mensajeSubject = new Subject<string>();
  public mensaje$ = this.mensajeSubject.asObservable();

  public mostrarMensaje(mensaje: string) {
    this.mensajeSubject.next(mensaje);
  }
}
