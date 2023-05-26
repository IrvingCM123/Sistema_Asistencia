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

  username: string = "";
  password: string = "";
  loginFailed: boolean = false;
  loggedIn: boolean = false;

  CrearCuenta(): void {
    console.log("ejecutar", this.username, this.password);333
    if (this.username === "admin" && this.password === "password") {
      this.datosLocales.Actualizar_Login(true);
      this.datosLocales.guardar_DatoLocal("docenteId", 1);
      this.router.navigate(['/Sistema/Inicio/Listas']); // Navegar a la ruta 'Listas' después de crear la cuenta
    } else {
      this.datosLocales.Actualizar_Login(false);
      this.loginFailed = true;
      this.loggedIn = false;
    }
  }

  IniciarSesion() {
    this.datosLocales.Actualizar_Formulario('login');
    this.datosLocales.guardar_DatoLocal('formulario', 'login');
    this.location.go("/Sistema/Login");
    location.reload();
  }

  updateUsername(event: Event): void {
    this.username = (event.target as HTMLInputElement).value;
  }

  updatePassword(event: Event): void {
    this.password = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.datosLocales.Actualizar_Login(false);
  }

}
