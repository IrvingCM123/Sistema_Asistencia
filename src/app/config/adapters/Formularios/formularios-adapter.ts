import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormularioPort } from '../../ports/Formularios/formulario-ports';
import { Formularios_Entity } from 'src/app/domain/Formularios/models/Formulario.entity';

@Injectable({
  providedIn: 'root'
})
export class FormulariosAdapter implements FormularioPort {
  apiUrl = environment.apiMensaje;

  constructor(private http: HttpClient) {}

  postFormulario(Contenido: any): Observable<Formularios_Entity> {
    return this.http.post<any>(`${this.apiUrl}`, Contenido);
  }

}
