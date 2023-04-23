import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  NRC: any;

  constructor() { }

  setDato(dato: any) {
    this.NRC = dato;
  }

  getDato() {
    return this.NRC;
  }
}
