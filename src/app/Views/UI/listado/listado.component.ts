import { GetEscanerDatosUseCase } from './../../../domain/EscanerDatos/usecase/getEscanerDatos';
import { Component, Inject, OnInit } from '@angular/core';
import { DatosService } from '../inicio/Datos.Service';

export interface Estructura {
  Matricula: string;
  Nombre: string;
  Estado: string;
  Hora: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  mostrarLista: Estructura[] = [];
  listaAsistencia: any = [];
  nrcMateria: string = '';
  carrera: string = '';
  datosCargados: boolean = false;
  fechaCompleta: string;

  constructor(
    private _getDatos: GetEscanerDatosUseCase,
    private datos: DatosService
  ) {
    this.carrera = datos.getCarrera();
    this.nrcMateria = datos.getNrc();

    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let año = fecha.getFullYear();
    this.fechaCompleta = año + ':' + mes + ':' + dia;
  }

  async ngOnInit() {
    (await this._getDatos.getEscanerDatos(this.nrcMateria, this.fechaCompleta)).subscribe((datos) => {
      this.listaAsistencia = datos;
    }, (error) => {
      console.error('Error al obtener los datos:', error);
    });

  }
}
