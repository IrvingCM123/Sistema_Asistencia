import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../listas/FirestoreListas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private datosLocales: FirestoreService, private router: Router) { }

  username: string = "";
  password: string = "";
  loginFailed: boolean = false;
  loggedIn: boolean = false;

  login(): void {
    if (this.username === "admin" && this.password === "password") {
      this.datosLocales.guardar_DatoLocal("loggedIn", true);
      this.datosLocales.guardar_DatoLocal("docenteId", 1);
      this.router.navigate(['/Sistema/Inicio']);
    } else {
      this.datosLocales.guardar_DatoLocal("loggedIn", false);
      this.loginFailed = true;
      this.loggedIn = false;
    }
  }

  ngOnInit(): void {

  }

}
