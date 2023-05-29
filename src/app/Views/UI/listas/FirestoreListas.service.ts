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
  
}
