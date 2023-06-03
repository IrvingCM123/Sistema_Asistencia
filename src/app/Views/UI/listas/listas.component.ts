import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatosService } from '../inicio/Datos.Service';
import { HttpClient } from '@angular/common/http';
import { GetListaAsistenciaUseCase } from 'src/app/domain/ListaAsistencia/usecase/getLista';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class Listas implements OnInit {
  listaAsistencia: any[] | any= [];
  nrcMateria: any;
  carrera: any;
  jsonData: any;

  fileToUpload: File | any;
  filePreview: boolean | any;
  uploadSuccess: boolean | any;

  constructor(
    private _getListaAsistenciaCasosUso: GetListaAsistenciaUseCase,
    private datos: DatosService,
    private http: HttpClient
  ) {
    this.carrera = datos.getCarrera();
    this.nrcMateria = datos.getNrc();
  }

  async ngOnInit() {
    this.listaAsistencia = await this._getListaAsistenciaCasosUso.getListaAsistenciaByNrcCarrera(this.nrcMateria, this.carrera);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.readFile(file);
  }

  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      this.jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      this.filePreview = true;
      console.log(this.jsonData);
    };
    reader.readAsArrayBuffer(file);
  }



  uploadFile(event: any) {
    event.preventDefault();

    if (this.fileToUpload) {
      const formData = new FormData();
      formData.append('file', this.fileToUpload);

      this.http.post<any>('URL_DE_TU_API', formData).subscribe(
        response => {
          this.listaAsistencia = response;
          this.uploadSuccess = true;
        },
        error => {
          console.error('Error al cargar el archivo:', error);
        }
      );
    }
  }
}
