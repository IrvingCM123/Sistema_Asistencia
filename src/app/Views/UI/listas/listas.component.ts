import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatosService } from '../inicio/Datos.Service';
import { HttpClient } from '@angular/common/http';
import { GetListaAsistenciaUseCase } from 'src/app/domain/ListaAsistencia/usecase/getLista';
import * as XLSX from 'xlsx';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class Listas implements OnInit {
  listaAsistencia: any[] | any = [];
  nrcMateria: any;
  carrera: any;
  jsonData: any;

  archivoRecibido: File | any;
  vistaPreviaArchivo: boolean | any;
  mensajeSubir: boolean | any;
  Guardar_Datos: any[] = [];

  constructor(
    private _getListaAsistenciaCasosUso: GetListaAsistenciaUseCase,
    private datos: DatosService,
    private http: HttpClient
  ) {
    this.carrera = datos.getCarrera();
    this.nrcMateria = datos.getNrc();
  }

  async ngOnInit() {
    this.listaAsistencia =
      await this._getListaAsistenciaCasosUso.getListaAsistenciaByNrcCarrera(
        this.nrcMateria,
        this.carrera
      );
  }

  Archivo(event: any) {
    const file = event.target.files[0];
    this.RecibirArchivo(file);
  }

  RecibirArchivo(file: File) {
    const archivo: any = new FileReader();
    archivo.onload = (e: any) => {
      const leer_Archivo: any = new Uint8Array(e.target.result);
      const acceder_Datos: any = XLSX.read(leer_Archivo, { type: 'array' });
      const acceder_HojaArchivo: any =
        acceder_Datos.Sheets[acceder_Datos.SheetNames[0]];

      console.log(acceder_HojaArchivo);

      const Matricula: any = XLSX.utils.sheet_to_json(acceder_HojaArchivo, {
        range: 'D11:D36',
        header: 1,
      });
      const Nombre: any = XLSX.utils.sheet_to_json(acceder_HojaArchivo, {
        range: 'H11:H36',
        header: 1,
      });
      const Status: any = XLSX.utils.sheet_to_json(acceder_HojaArchivo, {
        range: 'O11:O36',
        header: 1,
      });
      const Carrera: any = XLSX.utils.sheet_to_json(acceder_HojaArchivo, {
        range: 'P11:P36',
        header: 1,
      });


      for (let i = 2; i < Matricula.length; i++) {
        const datos_lista: any[] = [
          Matricula[i][0],
          Nombre[i][0],
          Status[i][0],
          Carrera[i][0],
        ];
        this.Guardar_Datos.push(datos_lista);
      }

      this.jsonData = this.Guardar_Datos;
      this.vistaPreviaArchivo = true;
    };
    archivo.readAsArrayBuffer(file);
  }

  GuardarDatosEnFirestore() {
    const db = firebase.firestore();
    const coleccion = db.collection(`ISW/Materias/`+ this.nrcMateria);

    for (let i = 2; i <  this.Guardar_Datos.length; i++) {
      const datos_lista: any = {
        Matricula:  this.Guardar_Datos[i][0],
        Nombre:  this.Guardar_Datos[i][1],
        Status:  this.Guardar_Datos[i][2],
        Carrera:  this.Guardar_Datos[i][3],
      };

      const docRef = coleccion.doc(datos_lista.Matricula);
      docRef
        .set(datos_lista)
        .then(() => {
          console.log('Datos guardados correctamente');
        })
        .catch((error) => {
          console.error('Error al guardar los datos:', error);
        });
    }
  }


}
