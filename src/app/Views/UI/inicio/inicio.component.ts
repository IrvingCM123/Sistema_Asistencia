import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetMateriaUseCase } from 'src/app/domain/Materia/usecase/client/getMateria';
import { DatosService } from './Datos.Service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public Materias : Array <any> = [];

  constructor( private _getMateriasCasosUso : GetMateriaUseCase, private enviarNRC: DatosService) { }
  response$ :any ;
  datos: any ;
  dato:number = 0;

  ngOnInit(): void {
    this.response$ = this._getMateriasCasosUso.getMateriasAll();
    this.response$.subscribe( (Resp: any) => { this.Materias = Resp } )
  }

  enviarDato(id: number) {
    this.enviarNRC.setDato(id);
    console.log(id)
  }

}
