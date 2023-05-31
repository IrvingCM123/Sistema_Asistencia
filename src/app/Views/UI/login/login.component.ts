import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../listas/FirestoreListas.service';
import { Router } from '@angular/router';
import { GetLoginUseCase } from 'src/app/domain/Login/usecase/getLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private datosLocales: FirestoreService,
    private router: Router,
    private location: Location,
    private _IniciarSesion: GetLoginUseCase
  ) {}

  username: string = '';
  password: string = '';
  loginFailed: boolean = false;
  loggedIn: boolean = false;
  public Token:any;
  responseSuccessful = false; // Variable para indicar si la respuesta es exitosa o no

  async login(usuario: string, contraseña: string) {
    let response$;
    this.responseSuccessful = false; // Inicializar como false antes de la petición

    response$ = await this._IniciarSesion.postLogin(usuario, contraseña).toPromise();

    try {
      const Resp:any = await response$;
      this.datosLocales.guardar_DatoLocal('Resp', Resp.token); // Guardar el valor "token"
      this.responseSuccessful = true; // Actualizar a true si la petición se completó correctamente
    } catch (error) {
      this.responseSuccessful = false; // Actualizar a false si hay un error en la petición
    }

    return this.responseSuccessful; // Devolver el valor de la variable de respuesta exitosa
  }

  async IniciarSesion() {
    const loginSuccessful = await this.login(this.username, this.password);
    console.log(this.responseSuccessful)
    console.log(this.datosLocales.obtener_DatoLocal('Resp'))
    if (loginSuccessful) {
      this.datosLocales.Actualizar_Login(true);
      this.datosLocales.guardar_DatoLocal('login', true);
      this.datosLocales.guardar_DatoLocal('docenteId', 1);
      this.router.navigate(['/Sistema/Inicio/']);
    } else {
      this.datosLocales.Actualizar_Login(false);
      this.loginFailed = true;
      this.loggedIn = false;
    }
  }

  CrearCuenta() {
    this.datosLocales.Actualizar_Formulario('registro');
    this.datosLocales.guardar_DatoLocal('formulario', 'registro');
    this.location.go('/Sistema/Registro');
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
