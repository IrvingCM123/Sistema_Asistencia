import { Component, OnInit } from '@angular/core';
import { GetAlumnoUseCase } from 'src/app/domain/Alumnos/usecase/client/getAlumno';
import { FirestoreService } from '../listas/FirestoreListas.service';
import { Router } from '@angular/router';
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
    this.datos_Locales.eliminar_DatoLocal('docenteId');
    this.datos_Locales.Actualizar_Formulario(false);
    this.location.go('/Sistema/Registro');
  }
  Hola(): void {
    console.log('Hola');
  }

  ngOnInit(): void {}
}
