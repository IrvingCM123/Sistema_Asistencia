import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './Views/UI/listas/FirestoreListas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (private datos_Locales: FirestoreService){};

  loggedIn: boolean = this.datos_Locales.obtener_DatoLocal('loggedIn');
  title = 'Sistema';
  showRegistro: boolean = true;
  showIniciarSesion: boolean = false;

  mostrarIniciarSesion(): void {
    this.showRegistro = false;
    this.showIniciarSesion = true;
  }

  mostrarRegistro(): void {
    this.showRegistro = true;
    this.showIniciarSesion = false;
  }

  ngOnInit(): void {
    this.datos_Locales.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    })
  }
}
