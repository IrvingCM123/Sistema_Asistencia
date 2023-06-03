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
    const reader: any = new FileReader();
    reader.onload = (e: any) => {
      const data: any = new Uint8Array(e.target.result);
      const workbook: any = XLSX.read(data, { type: 'array' });
      const worksheet: any = workbook.Sheets[workbook.SheetNames[0]];

      const rangeD: any = XLSX.utils.sheet_to_json(worksheet, { range: 'D11:D36', header: 1 });
      const rangeH: any = XLSX.utils.sheet_to_json(worksheet, { range: 'H11:H36', header: 1 });
      const rangeO: any = XLSX.utils.sheet_to_json(worksheet, { range: 'O11:O36', header: 1 });
      const rangeP: any = XLSX.utils.sheet_to_json(worksheet, { range: 'P11:P36', header: 1 });

      const combinedData: any[] = [];
      for (let i = 0; i < rangeD.length; i++) {
        const row: any[] = [rangeD[i][0], rangeH[i][0], rangeO[i][0], rangeP[i][0]];
        combinedData.push(row);
      }

      this.jsonData = combinedData;
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
