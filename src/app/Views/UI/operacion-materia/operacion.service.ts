import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {
  apiUrl = environment.apiMensaje;

  constructor(private http: HttpClient) {}

  enviarOperacionPorCorreo(operacion: any) {
    return this.http.post<any>(`${this.apiUrl}`, operacion);
  }

  private mensajeSubject = new Subject<string>();
  public mensaje$ = this.mensajeSubject.asObservable();

  public mostrarMensaje(mensaje: string) {
    this.mensajeSubject.next(mensaje);
  }
}
