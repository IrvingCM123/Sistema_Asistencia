import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MensajeriaPort } from '../../ports/Mensajeria/Mensajeria-ports';
import { Mensajeria_Entity } from 'src/app/domain/Mensajeria/models/Mensajeria.entity';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaAdapter implements MensajeriaPort {
  apiUrl = environment.apiDocente+"/enviar/";

  constructor(private http: HttpClient) {}

  postMensajeria(Contenido: any): Observable<Mensajeria_Entity> {
    return this.http.post<any>(`${this.apiUrl}`, Contenido);
  }

}
