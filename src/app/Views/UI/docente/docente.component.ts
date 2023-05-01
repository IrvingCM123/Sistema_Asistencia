import { Component, OnInit } from '@angular/core';
import { GetDocenteUseCase } from 'src/app/domain/Docentes/use_case/client/getDocente';
import { DatosServicel } from '../listas/DatosServiceL.Service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent implements OnInit {

  public Docente_ID = "1";
  public N_Personal: string | any;

  constructor( private _getDocentesCasosUso : GetDocenteUseCase, private datosService: DatosServicel) { }

  response$: any ;
  datos: any;

  ngOnInit(): void {
    this.response$ = this._getDocentesCasosUso.getDocenteByID(this.Docente_ID);
    this.response$.subscribe( (data: any) => {
      this.datos = data;
      this.N_Personal = data.numero_personal;
      this.datosService.setNPersonal(this.N_Personal);
    } );
  }

}
