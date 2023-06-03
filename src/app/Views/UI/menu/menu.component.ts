import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../servicios/FirestoreListas.service';
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
    this.datos_Locales.eliminarCacheNavegador();
    this.datos_Locales.Actualizar_Formulario(false);
    this.location.go('/Sistema/Registro');
  }

  ngOnInit(): void {}
}
