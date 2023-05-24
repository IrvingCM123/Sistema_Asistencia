import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatosService } from '../inicio/Datos.Service';
import { FirestoreService } from './FirestoreListas.service';

interface Dato {
  id?: string;
  Hora: string;
  Matricula: string;
  Nombre: string;
  Status: string;
}
@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class Listas implements OnInit {
  listaAsistencia: any[] = [];
  nrcMateria: any;
  carrera: any;

  constructor(
    private firestoreService: FirestoreService,
    private datos: DatosService
  ) {
    this.carrera = datos.getCarrera();
    this.nrcMateria = datos.getNrc();
  }

  async ngOnInit() {
    console.log(this.nrcMateria, this.carrera)
    this.listaAsistencia = await this.firestoreService.getListaAsistencia(
      this.nrcMateria,
      this.carrera
    );
  }
}
