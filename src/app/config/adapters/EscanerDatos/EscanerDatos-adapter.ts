import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { EscanerDatos_Entity } from 'src/app/domain/EscanerDatos/models/Escaner.entity';
import { EscanerDatos_Port } from '../../ports/EscanerDatos/EscanerDatos-port';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EscanerDatosAdapter implements EscanerDatos_Port {

  constructor(
    private firestore: AngularFirestore
  ) { }

  async getEscanerDatos(nrc: string, diaLista: string): Promise<Observable<EscanerDatos_Entity>> {
    let url = '/Registro/Asistencia/' + nrc + '/' + diaLista + '/Alumnos';

    return new Observable<EscanerDatos_Entity>((observer) => {
      const collectionRef = this.firestore.collection(url);

      collectionRef.snapshotChanges().subscribe((snapshot) => {
        const datos_leidos: EscanerDatos_Entity[] | any= [];
        snapshot.forEach((doc) => {
          const data = doc.payload.doc.data() as EscanerDatos_Entity;
          const id = doc.payload.doc.id;
          datos_leidos.push({ id, ...data });
        });

        observer.next(datos_leidos);
      }, (error) => {
        console.error('Error al obtener los datos de Firestore:', error);
        observer.error(error);
      });
    });
  }
}
