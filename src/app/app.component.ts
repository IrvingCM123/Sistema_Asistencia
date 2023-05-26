import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FirestoreService } from './Views/UI/listas/FirestoreListas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn: boolean = false;
  formulario: string = this.datosLocales.obtener_DatoLocal('formulario'); // Deja el valor inicial vacío

  constructor(private router: Router, private datosLocales: FirestoreService) {}

  mostrarIniciarSesion(): void {
    this.formulario = 'login';
  }

  mostrarRegistro(): void {
    this.formulario = 'registro';
  }

  ngOnInit(): void {
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

    this.datosLocales.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });

    this.datosLocales.formulario$.subscribe(formulario => {
      this.formulario = formulario;
    });

    // Establece el formulario inicial basado en la URL actual
    const path = this.router.url.split('/')[1];
    if (path === 'Registro') {
      this.formulario = 'registro';
    } else if (path === 'Login') {
      this.formulario = 'login';
    }
  }
}
