import { Component, OnInit } from '@angular/core';
import { DatosService } from '../inicio/Datos.Service';
import { GetListasUseCase } from 'src/app/domain/Listas/use_case/client/getLista';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class Listas implements OnInit {
  NRC: any;
  estado = 'todos';
  itemsFiltrados: { id: number, matricula: string, nombre: string, status: string, Carrera: string, Asistencia: string }[] = [];

  asistencia: { id: number, matricula: string, nombre: string, status: string, Carrera: string, Asistencia: string }[] = [
    {id: 1, matricula: "zS20006735", nombre: "Irving Rafael Conde Marín", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 2, matricula: "zS20002135", nombre: "Rubén Castillo Ramirez", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 3, matricula: "zS20006535", nombre: "Oziel Navarro Alejandres", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 4, matricula: "zS20001451", nombre: "Elizabeth Galindo Pedraza", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "no-presente"},
    {id: 1, matricula: "zS20006735", nombre: "Irving Rafael Conde Marín", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 2, matricula: "zS20002135", nombre: "Rubén Castillo Ramirez", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 3, matricula: "zS20006535", nombre: "Oziel Navarro Alejandres", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 4, matricula: "zS20001451", nombre: "Elizabeth Galindo Pedraza", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "no-presente"},
    {id: 1, matricula: "zS20006735", nombre: "Irving Rafael Conde Marín", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 2, matricula: "zS20002135", nombre: "Rubén Castillo Ramirez", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 3, matricula: "zS20006535", nombre: "Oziel Navarro Alejandres", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 4, matricula: "zS20001451", nombre: "Elizabeth Galindo Pedraza", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "no-presente"},
    {id: 1, matricula: "zS20006735", nombre: "Irving Rafael Conde Marín", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 2, matricula: "zS20002135", nombre: "Rubén Castillo Ramirez", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 3, matricula: "zS20006535", nombre: "Oziel Navarro Alejandres", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 4, matricula: "zS20001451", nombre: "Elizabeth Galindo Pedraza", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "no-presente"},
    {id: 1, matricula: "zS20006735", nombre: "Irving Rafael Conde Marín", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 2, matricula: "zS20002135", nombre: "Rubén Castillo Ramirez", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 3, matricula: "zS20006535", nombre: "Oziel Navarro Alejandres", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 4, matricula: "zS20001451", nombre: "Elizabeth Galindo Pedraza", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "no-presente"},
    {id: 4, matricula: "zS20001451", nombre: "Elizabeth Galindo Pedraza", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "no-presente"},
    {id: 1, matricula: "zS20006735", nombre: "Irving Rafael Conde Marín", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 2, matricula: "zS20002135", nombre: "Rubén Castillo Ramirez", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 3, matricula: "zS20006535", nombre: "Oziel Navarro Alejandres", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 4, matricula: "zS20001451", nombre: "Elizabeth Galindo Pedraza", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "no-presente"},
    {id: 1, matricula: "zS20006735", nombre: "Irving Rafael Conde Marín", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 2, matricula: "zS20002135", nombre: "Rubén Castillo Ramirez", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 3, matricula: "zS20006535", nombre: "Oziel Navarro Alejandres", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 4, matricula: "zS20001451", nombre: "Elizabeth Galindo Pedraza", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "no-presente"},
    {id: 1, matricula: "zS20006735", nombre: "Irving Rafael Conde Marín", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 2, matricula: "zS20002135", nombre: "Rubén Castillo Ramirez", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 3, matricula: "zS20006535", nombre: "Oziel Navarro Alejandres", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "presente"},
    {id: 4, matricula: "zS20001451", nombre: "Elizabeth Galindo Pedraza", status: "Primera Inscripción", Carrera: "ISW", Asistencia: "no-presente"},
  ]

  constructor(
    private recibirDato: DatosService,
    private _getListasCasosUso: GetListasUseCase,
  ) {}

  response$: any;
  datos: any;

  ngOnInit(): void {
    this.NRC = this.recibirDato.getDato();
    this.response$ = this._getListasCasosUso.getListaByID(this.NRC);
    this.response$.subscribe( (data: any) => { this.datos = data })
    this.filtrarItems()
  }

  filtrarItems() {
    if (this.estado === 'presente') {
      this.itemsFiltrados = this.asistencia.filter(item => item.Asistencia === 'presente');
    } else if (this.estado === 'no-presente') {
      this.itemsFiltrados = this.asistencia.filter(item => item.Asistencia === 'no-presente');
    } else {
      this.itemsFiltrados = this.asistencia;
    }
  }

}


