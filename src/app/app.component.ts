import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FirestoreService } from './Views/UI/servicios/FirestoreListas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn: boolean = false;
  formulario: string = '';

  constructor(private router: Router, private datosLocales: FirestoreService) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event.urlAfterRedirects.split('/')[1];
        if (path === 'Registro') {
          this.formulario = 'registro';
        } else if (path === 'Login') {
          this.formulario = 'login';
        }
      }
    });
  }

  mostrarIniciarSesion(): void {
    this.formulario = 'login';
  }

  mostrarRegistro(): void {
    this.formulario = 'registro';
  }

  async ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event.urlAfterRedirects.split('/')[1];
        if (path === 'Registro') {
          this.formulario = 'registro';
        } else if (path === 'Login') {
          this.formulario = 'login';
        }
      }
    });

    const cachedLoggedIn = await this.datosLocales.obtener_DatoLocal('login');
    if (cachedLoggedIn) {
      this.loggedIn = cachedLoggedIn;
    }

    const cachedFormulario = await this.datosLocales.obtener_DatoLocal('formulario');
    if (cachedFormulario) {
      this.formulario = cachedFormulario;
    }

    this.datosLocales.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });

    this.datosLocales.formulario$.subscribe(formulario => {
      this.formulario = formulario;
    });
  }
}
