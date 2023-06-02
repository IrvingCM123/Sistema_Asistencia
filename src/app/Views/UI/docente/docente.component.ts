import { Component, OnInit } from '@angular/core';
import { GetDocenteUseCase } from 'src/app/domain/Docentes/use_case/client/getDocente';
import { DatosServicel } from '../listas/DatosServiceL.Service';
import { FirestoreService } from '../listas/FirestoreListas.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent implements OnInit {

  public Docente_ID: string = "";
  response$: any;

  constructor(
    private _getDocentesCasosUso: GetDocenteUseCase,
    private datosService: DatosServicel,
    private datos_Locales: FirestoreService
  ) { }

  N_Personal: string | any;
  datos: any;
  public token: string = "";

  async ngOnInit() {

    this.token = this.datos_Locales.obtener_DatoLocal('Resp');
    this.response$ = await this._getDocentesCasosUso.getDocenteByID(this.token);
    this.response$.subscribe((data: any) => {
      this.datos = data;
      this.N_Personal = data.numero_personal;
      this.datosService.setNPersonal(this.N_Personal);
    });
  }

}
