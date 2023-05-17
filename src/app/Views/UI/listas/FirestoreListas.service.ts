import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  private almacenar_NRC = new Subject<any>();
  private almacenar_Carrera = new Subject<any>();

  constructor(
    private firestore: AngularFirestore
  ) { }

  obtener_DatoLocal(indice: string): any {
    return localStorage.getItem(indice);
  }

  guardar_DatoLocal(indice: string, valor: any): void {
    localStorage.setItem(indice, valor);
  }

  Actualizar_NRC(): Observable<any> {
    return this.almacenar_NRC.asObservable();
  }

  Actualizar_Carrera(): Observable<any> {
    return this.almacenar_Carrera.asObservable();
  }

  async getListaAsistencia(nrc: string, carrera: string) {

    let url = '/' + carrera + '/Materias/' + nrc;
    const lista_encontrada = await this.firestore.collection(url).get().toPromise();

    if (lista_encontrada) {
      const datos_lista = lista_encontrada.docs.map((alumnos) => alumnos.data());
      return datos_lista;
    } else {
      console.log('No se pudo obtener la información de Firestore.');
      return [];
    }
  }

}
