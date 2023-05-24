import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetMateriaUseCase } from 'src/app/domain/Materia/usecase/client/getMateria';
import { DatosService } from './Datos.Service';
import { FirestoreService } from '../listas/FirestoreListas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  public Materias: Array<any> = [];
  public cantidad_alumnos: any[] = [];

  constructor(
    private _getMateriasCasosUso: GetMateriaUseCase,
    private obtenerDato: DatosService,
    private datos_Locales: FirestoreService
  ) {}
  response$: any;
  datos: any;
  dato: number = 0;

  async ngOnInit() {
    this.response$ = this._getMateriasCasosUso.getMateriasAll();

    this.response$.subscribe(async (Resp: any) => {
      this.Materias = Resp;
      this.obtener_cantidadEstudiantes();
    });
  }

  async obtener_cantidadEstudiantes() {
    let nrc: string[] | any = await this.Materias.map( (materia: any) => materia.nrc_materia );
    let carrera: string[] | any = await this.Materias.map( (materia: any) => materia.carrera_materia );

    for (let a = 0; a <= nrc.length - 1; a++) {
      this.cantidad_alumnos[a] = await this.datos_Locales.getCantidadEstudiantes(nrc[a], carrera[a]);
    }
  }

  enviarDato(nrc: any, carrera: any) {
    this.obtenerDato.setCarrera(carrera);
    this.obtenerDato.setNrc(nrc);
  }
}
