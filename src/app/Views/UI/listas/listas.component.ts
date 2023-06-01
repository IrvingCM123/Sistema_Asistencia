import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatosService } from '../inicio/Datos.Service';
import { FirestoreService } from './FirestoreListas.service';
import { DatosServicel } from './DatosServiceL.Service';
import { GetListaAsistenciaUseCase } from 'src/app/domain/ListaAsistencia/usecase/getLista';

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
  listaAsistencia: any[] | any= [];
  nrcMateria: any;
  carrera: any;


  constructor(
    private _getListaAsistenciaCasosUso: GetListaAsistenciaUseCase,
    private datos: DatosService,
  ) {
    this.carrera = datos.getCarrera();
    this.nrcMateria = datos.getNrc();
  }

  async ngOnInit() {
    this.listaAsistencia = await this._getListaAsistenciaCasosUso.getListaAsistenciaByNrcCarrera(this.nrcMateria, this.carrera);
  }
}
