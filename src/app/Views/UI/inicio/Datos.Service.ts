import { Injectable } from '@angular/core';
import { FirestoreService } from '../listas/FirestoreListas.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  NRC: any;
  Carrera: any;

  constructor(private datos_locales: FirestoreService) {}

  setNrc(dato: any) {
    this.NRC = dato;
    this.datos_locales.guardar_DatoLocal('NRC', dato)
  }

  getNrc() {
    console.log('get', this.datos_locales.obtener_DatoLocal('NRC'))
    return this.datos_locales.obtener_DatoLocal('NRC');
  }

  setCarrera(dato: any) {
    this.Carrera = dato;
    this.datos_locales.guardar_DatoLocal('Carrera', dato)
  }

  getCarrera() {
    return this.datos_locales.obtener_DatoLocal('Carrera');
  }
}
