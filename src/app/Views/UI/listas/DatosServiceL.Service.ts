import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosServicel {
  private N_Personal: string | any;

  constructor() {}

  setNPersonal(N_Personal: string | any) {
    this.N_Personal = N_Personal;
  }

  getNPersonal() {
    return this.N_Personal;
  }
}
