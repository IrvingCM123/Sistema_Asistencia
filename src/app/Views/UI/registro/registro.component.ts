import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../listas/FirestoreListas.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  constructor(private datosLocales: FirestoreService, private router: Router, private location: Location) { }

  nombre_usuario: string = "";
  correo_usuario: string = "";
  contrasena_usuario: string = "";
  confirmar_contrasena: string = "";
  NPersonal_usuario: string = "";
  imagen_usuario: string | any;


  CrearCuenta(): void {
    console.log("ejecutar", this.nombre_usuario, this.correo_usuario);
  }

  IniciarSesion() {
    this.datosLocales.Actualizar_Formulario('login');
    this.datosLocales.guardar_DatoLocal('formulario', 'login');
    this.location.go("/Sistema/Login");
    location.reload();
  }

  updateNombreUsuario(event: Event): void {
    this.nombre_usuario = (event.target as HTMLInputElement).value;
  }

  updateCorreo(event: Event): void {
    this.correo_usuario = (event.target as HTMLInputElement).value;
  }

  updateContrasena(event: Event): void {
    this.contrasena_usuario = (event.target as HTMLInputElement).value;
  }

  confirmarContrasena(event: Event): void {
    this.confirmar_contrasena = (event.target as HTMLInputElement).value;
  }

  updateNumeroPersonal(event: Event): void {
    this.NPersonal_usuario = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.datosLocales.Actualizar_Login(false);
  }

}
