import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../listas/FirestoreListas.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private datosLocales: FirestoreService) { }

  username: string = "";
  password: string = "";
  loginFailed: boolean = false;
  loggedIn: boolean = false;

  login(): void {
    // Aquí puedes agregar la lógica para validar las credenciales ingresadas.
    // Por simplicidad, este ejemplo compara el username con "admin" y la password con "password".

    if (this.username === "admin" && this.password === "password") {
      this.datosLocales.guardar_DatoLocal("loggedIn", true);
      this.loggedIn = this.datosLocales.obtener_DatoLocal("loggedIn");
    } else {
      this.datosLocales.guardar_DatoLocal("loggedIn", false);
      this.loginFailed = true;
      this.loggedIn = false;
    }
  }

  ngOnInit(): void {

  }

}
