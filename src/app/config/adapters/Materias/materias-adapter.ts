import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Materias, NRC } from 'src/app/domain/Materia/models/Materias.entity';
import { MateriasPort } from '../../ports/Materias/materias-port';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class MateriasAdapter implements MateriasPort {
  api = environment.apiDocente;
  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getNRCMaterias(numero_personal: string): Observable<NRC> {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: numero_personal,
    });
    return this.http.get<NRC>(this.api + 'VerMateriaDocente/', { headers: header });
  }

  getMateriasAll(NRC: string | any ): Observable<Materias[]> {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: NRC,
    });

    return this.http.get<Array<Materias>>(this.api + 'Materias', { headers: header });
  }
}
