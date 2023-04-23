import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DocentesPort } from '../../ports/Docentes/docentes-ports';
import { Docentes } from 'src/app/domain/Docentes/models/Docentes.entity';

@Injectable({
  providedIn: 'root'
})
export class DocenteAdapter implements DocentesPort {
  api = environment.apiUrl+'/Docentes/';
  constructor(private http: HttpClient) {}

  getDocenteByID(id: String): Observable<Docentes> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Docentes>(this.api+id, { headers: header });
  }
}
