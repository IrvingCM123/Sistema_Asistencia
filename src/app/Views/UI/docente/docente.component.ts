import { Component, OnInit } from '@angular/core';
import { GetDocenteUseCase } from 'src/app/domain/Docentes/use_case/client/getDocente';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent implements OnInit {

  public Docente_ID = "1";

  constructor( private _getDocentesCasosUso : GetDocenteUseCase) { }
  response$: any ;
  datos: any;

  ngOnInit(): void {
    this.response$ = this._getDocentesCasosUso.getDocenteByID(this.Docente_ID);
    this.response$.subscribe( (data: any) => { this.datos = data } )
  }

}
