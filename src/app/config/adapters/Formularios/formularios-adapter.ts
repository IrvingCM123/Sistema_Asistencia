import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CuentasPort } from '../../ports/Formularios/formulario-ports';
import { Cuentas_Entity } from 'src/app/domain/Formularios/models/Formulario.entity';

@Injectable({
  providedIn: 'root'
})
export class CuentasAdapter implements CuentasPort {
  apiUrl = environment.apiDocente+"/RegistrarUsuarios/";

  constructor(private http: HttpClient) {}

  postCuentas(Contenido: any): Observable<Cuentas_Entity> {
    return this.http.post<any>(`${this.apiUrl}`, Contenido);
  }

}
