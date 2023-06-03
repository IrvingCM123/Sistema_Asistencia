import { GetEscanerDatosUseCase } from './../../../domain/EscanerDatos/usecase/getEscanerDatos';
import { Component, Inject, OnInit } from '@angular/core';
import { FirestoreService } from '../servicios/FirestoreListas.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    private firestoreService: FirestoreService,
    private _getDatos: GetEscanerDatosUseCase,
    private datos: DatosService
  ) {
    this.carrera = datos.getCarrera();
    this.nrcMateria = datos.getNrc();
    console.log(this.nrcMateria)

    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let año = fecha.getFullYear();
    this.fechaCompleta = año + ':' + mes + ':' + dia;
    console.log(this.fechaCompleta)
  }

  async ngOnInit() {
    this.listaAsistencia = await this._getDatos.getEscanerDatos(this.nrcMateria, this.fechaCompleta);
  }

}
