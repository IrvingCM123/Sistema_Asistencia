import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../listas/FirestoreListas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    private datos_Locales: FirestoreService,
    private location: Location
  ) {}

  CerrarSesion() {
    this.datos_Locales.Actualizar_Login(false);
    this.datos_Locales.eliminar_DatoLocal('Resp');
    this.datos_Locales.eliminar_DatoLocal('login');
    this.datos_Locales.Actualizar_Formulario(false);
    this.location.go('/Sistema/Registro');
  }

  ngOnInit(): void {}
}
