import { Component, Inject, OnInit } from '@angular/core';
import { FirestoreService } from '../listas/FirestoreListas.service';
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
    this.listaAsistencia = await this.firestoreService.getDatosLeidos(this.nrcMateria, this.fechaCompleta);
    console.log('aa', this.listaAsistencia)
  }

}
