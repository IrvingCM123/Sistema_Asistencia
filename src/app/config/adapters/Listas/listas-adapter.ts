import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Listas_Entity } from 'src/app/domain/Listas/models/Listas.entity';
import { ListasPort } from '../../ports/listas/listas-ports';

@Injectable({
  providedIn: 'root'
})
export class ListasAdapter implements ListasPort {
  api = environment.apiUrl+'/Listas/';
  constructor(private http: HttpClient) {}

  getListaByID(id: String): Observable<Listas_Entity> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Listas_Entity>(this.api+id, { headers: header });
  }
}

