import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../listas/FirestoreListas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private datosLocales: FirestoreService, private router: Router, private location: Location) { }

  username: string = "";
  password: string = "";
  loginFailed: boolean = false;
  loggedIn: boolean = false;

  login(): void {

    console.log("ejecutar", this.username, this.password);333
    if (this.username === "admin" && this.password === "password") {
      this.datosLocales.Actualizar_Login(true);
      this.datosLocales.guardar_DatoLocal("docenteId", 1);
      //this.router.navigate(['/Sistema/Inicio']);
      this.location.go('/Sistema/Inicio');
      location.reload();
    } else {
      this.datosLocales.Actualizar_Login(false);
      this.loginFailed = true;
      this.loggedIn = false;
    }
  }

  CrearCuenta() {
    this.datosLocales.Actualizar_Formulario('registro');
    this.datosLocales.guardar_DatoLocal('formulario', 'registro');
    this.location.go("/Sistema/Registro");
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
