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

  constructor(
    private recibirDato: DatosService,
    private _getListasCasosUso: GetListasUseCase
  ) {}
  response$: any;
  datos: any;

  ngOnInit(): void {
    this.NRC = this.recibirDato.getDato();
    this.response$ = this._getListasCasosUso.getListaByID(this.NRC);
    this.response$.subscribe( (data: any) => { this.datos = data })
  }
}
