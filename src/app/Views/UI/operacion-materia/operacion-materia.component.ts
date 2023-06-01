import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetMensajeriaUseCase } from 'src/app/domain/Mensajeria/usecase/postMensajeria';

@Component({
  selector: 'app-operacion-materia',
  templateUrl: './operacion-materia.component.html',
  styleUrls: ['./operacion-materia.component.scss'],
})
export class OperacionMateriaComponent {
  mensajeContenido = {
    numero: ' ',
    nrc: ' ',
  };

  constructor(
    private _mensajeriaUseCase: GetMensajeriaUseCase,
    private location: Location,
  ) {}

  MandarMensaje() {
    this._mensajeriaUseCase.postMensajeria(this.mensajeContenido).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  public onSubmit(event: Event) {
    event.preventDefault();
    this.location.go;
  }
}
