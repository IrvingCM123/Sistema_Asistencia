import { Component, OnInit } from '@angular/core';
import { GetMateriaUseCase } from 'src/app/domain/Materia/usecase/client/getMateria';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public Materias : Array <any> = [];

  constructor( private _getMateriasCasosUso : GetMateriaUseCase) { }
  response$ :any ;
  datos: any ;

  ngOnInit(): void {
    this.response$ = this._getMateriasCasosUso.getMateriasAll();
    this.response$.subscribe( (Resp: any) => { this.Materias = Resp } )
  }

}
