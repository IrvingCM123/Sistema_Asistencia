import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetMateriaUseCase } from 'src/app/domain/Materia/usecase/client/getMateria';
import { DatosService } from './Datos.Service';
import { FirestoreService } from '../listas/FirestoreListas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public Materias : Array <any> = [];

  constructor( private _getMateriasCasosUso : GetMateriaUseCase, private obtenerDato: DatosService) { }
  response$ :any ;
  datos: any ;
  dato:number = 0;

  ngOnInit(): void {
    this.response$ = this._getMateriasCasosUso.getMateriasAll();
    this.response$.subscribe( (Resp: any) => { this.Materias = Resp } )
  }

  enviarDato(nrc: any, carrera: any) {
    this.obtenerDato.setCarrera(carrera);
    this.obtenerDato.setNrc(nrc);
  }

}
