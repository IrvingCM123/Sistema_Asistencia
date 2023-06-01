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
    let url = '/Registro/Asistencia/' + nrc + '/' + diaLista + '/Alumnos'

    const obtener_datos = await this.firestore.collection(url).get().toPromise();
    if (obtener_datos) {
      const datos_leidos: any = obtener_datos.docs.map((datos) => datos.data());
      return datos_leidos;
    } else {
      console.log('No se pudo obtener la información de Firestore.');
      let error: any = []
      return error;
    }
  }


}
