import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  private loggedInSubject = new Subject<any>();
  loggedIn$ = this.loggedInSubject.asObservable();

  private docenteSubject = new Subject<any>();
  docente$ = this.docenteSubject.asObservable();

  private formularioSubject = new Subject<any>();
  formulario$ = this.formularioSubject.asObservable();

  constructor(
    private firestore: AngularFirestore
  ) { }
  obtener_DatoLocal(indice: string): any {
    return localStorage.getItem(indice);
  }
  guardar_DatoLocal(indice: string, valor: any): void {
    localStorage.setItem(indice, valor);
    console.log(valor, indice);
  }

  eliminar_DatoLocal(indice: string): void {
    localStorage.removeItem(indice);
  }

  Actualizar_Login(loggedIn: boolean) {
    this.loggedInSubject.next(loggedIn);
  }

  Actualizar_Docente(docente: string | number) {
    this.docenteSubject.next(docente);
  }

  Actualizar_Formulario(formulario: string | any) {
    this.formularioSubject.next(formulario);
  }

  async getListaAsistencia(nrc: string, carrera: string) {
    try {
      let url = '/' + carrera + '/Materias/' + nrc;
      const lista_encontrada = await this.firestore.collection(url).get().toPromise();
      console.log("Lista Asistencia", lista_encontrada);
      if (lista_encontrada) {
        const datos_lista = await lista_encontrada.docs.map((alumnos) => alumnos.data());
        console.log("Dato", datos_lista);
        return datos_lista;
      } else {
        console.log('No se pudo obtener la información de Firestore.');
        return [];
      }
    } catch (error) {
      console.error('Error al obtener la información de Firestore:', error);
      return [];
    }
  }
  async getCantidadEstudiantes(nrc: string, carrera: string) {
    let url = '/' + carrera + '/Materias/' + nrc;
    const lista_encontrada = await this.firestore.collection(url).get().toPromise();
    if (lista_encontrada) {
      const datos_lista = lista_encontrada.docs.map((alumnos) => alumnos.data());
      let contador = datos_lista.length;
      return contador;
    } else {
      console.log('No se pudo obtener la información de Firestore.');
      return [];
    }
  }
  async getDatosLeidos(nrc: string, dia:any) {
    let url = '/Registro/Asistencia/' + nrc + '/' + dia + '/Alumnos'
    console.log(dia)
    const obtener_datos = await this.firestore.collection(url).get().toPromise();
    if (obtener_datos) {
      const datos_leidos = obtener_datos.docs.map((datos) => datos.data());
      console.log(datos_leidos)
      return datos_leidos;
    } else {
      console.log('No se pudo obtener la información de Firestore.');
      return [];
    }
  }
}
