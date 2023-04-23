import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlumnosPort } from '../../ports/Alumnos/alumnos-ports';
import { Alumnos } from 'src/app/domain/Alumnos/models/Alumnos.entity';

@Injectable({
  providedIn: 'root'
})
export class AlumnoAdapter implements AlumnosPort {
  api = environment+'/Docentes/';

  constructor(private http: HttpClient) {}

  getAlumnosByID(id: String): Observable<Alumnos> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Alumnos>(this.api+id, { headers: header });
  }
}
