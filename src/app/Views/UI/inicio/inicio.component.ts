import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetMateriaUseCase } from 'src/app/domain/Materia/usecase/client/getMateria';
import { DatosService } from './Datos.Service';
import { FirestoreService } from '../servicios/FirestoreListas.service';
import { GetListaAsistenciaUseCase } from 'src/app/domain/ListaAsistencia/usecase/getLista';
import { PostTokenUseCase } from 'src/app/domain/Tokens/usecase/postTokens';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  constructor(
    private _getMateriasCasosUso: GetMateriaUseCase,
    private _generarToken: PostTokenUseCase,
    private _getCantidadLista: GetListaAsistenciaUseCase,
    private obtenerDato: DatosService,
    private datosLocales: FirestoreService
  ) {}

  public nrc$: any;
  public Materias: Array<any> = [];
  public cantidad_alumnos: any[] = [];

  public materias$: any;
  public Token: string | any;
  public TokenNrc: string | any;

  public datos: any;
  public dato: number = 0;

  async ngOnInit() {
    this.Token = this.datosLocales.obtener_DatoLocal('Resp');
    console.log(this.Token);
    await this.obtener_nrcMaterias(this.Token);
    await this.generarToken(this.nrc$.nrcs);
    await this.obtener_Materias(this.TokenNrc.token);
  }

  async generarToken(valor: string | any) {
    this.TokenNrc = await new Promise((resolve, reject) => {
      this._generarToken.postTokens(valor).subscribe(
        (Resp: any) => {
          resolve(Resp);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  async obtener_cantidadEstudiantes() {
    let nrc: string[] | any = await this.Materias.map(
      (materia: any) => materia.nrc
    );
    let carrera: string[] | any = await this.Materias.map(
      (materia: any) => materia.licenciatura
    );

    for (let a = 0; a <= nrc.length - 1; a++) {
      this.cantidad_alumnos[a] =
        await this._getCantidadLista.getCantidadListaAsistencia(
          nrc[a],
          carrera[a]
        );
    }
  }

  async obtener_nrcMaterias(Token: string) {
    this.nrc$ = await new Promise((resolve, reject) => {
      this._getMateriasCasosUso.getNRCMaterias(Token).subscribe(
        (Resp: any) => {
          resolve(Resp);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  async obtener_Materias(materia: any) {
    this.materias$ = await new Promise((resolve, reject) => {
      this._getMateriasCasosUso.getMateriasAll(materia).subscribe(
        (Resp: any) => {
          resolve(Resp);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
    this.Materias = this.materias$;
    await this.obtener_cantidadEstudiantes();
  }

  enviarDato(nrc: any, carrera: any) {
    this.obtenerDato.setCarrera(carrera);
    this.obtenerDato.setNrc(nrc);
  }
}
