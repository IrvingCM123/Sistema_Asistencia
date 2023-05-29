import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { GetMensajeriaUseCase } from 'src/app/domain/Mensajeria/usecase/postMensajeria';

@Component({
  selector: 'app-baja-materia',
  templateUrl: './baja-materia.component.html',
  styleUrls: ['./baja-materia.component.scss']
})
export class BajaMateriaComponent {
  mensajeContenido = {
    numero: '',
    nrc: '',
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
