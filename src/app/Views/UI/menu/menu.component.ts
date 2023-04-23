import { Component, OnInit } from '@angular/core';
import { GetAlumnoUseCase } from 'src/app/domain/Alumnos/usecase/client/getAlumno';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public Docente_ID : string = " ";

  constructor( private _getAlumnosCasosUso : GetAlumnoUseCase) { }
  response$:any ;
  datos:any;

  ngOnInit(): void {
    this.response$ = this._getAlumnosCasosUso.getAlumnoByID(this.Docente_ID);
    this.response$.subscribe( (data: any) => { this.datos = data })
  }

}
