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
  constructor(private http: HttpClient) {}

  getListasAll(): Observable<Listas_Entity[]> {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<Array<Listas_Entity>>('${environment.apiUrl}/Listas_Entity/', { headers: header });
  }
}

