import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Docentes } from 'src/app/domain/Docentes/models/Docentes.entity';
import { ListaAsistencia_Port } from '../../ports/ListaAsistencia/ListaAsistencia-ports';
import { ListaAsistencia_Entity } from 'src/app/domain/ListaAsistencia/models/ListaAsistencia.entity';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ListaAsistenciaAdapter implements ListaAsistencia_Port {

  constructor(
    private firestore: AngularFirestore
  ) { }

  async getCantidadListaAsistencia(nrc: string, carrera: string): Promise<Observable<Number>> {
    try {
      let apiFirestore = '/' + carrera + '/Materias/' + nrc;
      const lista_encontrada = await this.firestore.collection(apiFirestore).get().toPromise();
      if (lista_encontrada) {
        const datos_lista : any = await lista_encontrada.docs.map((alumnos) => alumnos.data());
        let contador = datos_lista.length;
        return contador;
      } else {
        console.log('No se pudo obtener la información de Firestore.');
        let error: any = [];
        return error;
      }
    } catch (error) {
      console.error('Error al obtener la información de Firestore:', error);
      let retornar: any = [];
      return retornar;
    }
  }

  async getListaAsistenciaByNrcCarrera(nrc: string, carrera: string): Promise<Observable<ListaAsistencia_Entity>> {
    try {
      let apiFirestore = '/' + carrera + '/Materias/' + nrc;
      const lista_encontrada = await this.firestore.collection(apiFirestore).get().toPromise();
      if (lista_encontrada) {
        const datos_lista : any = await lista_encontrada.docs.map((alumnos) => alumnos.data());
        return datos_lista;
      } else {
        console.log('No se pudo obtener la información de Firestore.');
        let error: any = [];
        return error;
      }
    } catch (error) {
      console.error('Error al obtener la información de Firestore:', error);
      let retornar: any = [];
      return retornar;
    }
  }

}
