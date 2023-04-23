import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Materias } from 'src/app/domain/Materia/models/Materias.entity';
import { MateriasPort } from '../../ports/Materias/materias-port';


@Injectable({
  providedIn: 'root'
})
export class MateriasAdapter implements MateriasPort {
  api = environment.apiUrl+'/Materias/';
  constructor(private http: HttpClient) {}

  getMateriasAll(): Observable<Materias[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Array<Materias>>(this.api, { headers: header });
  }
}
