import { Component, OnInit } from '@angular/core';
import { GetAlumnoUseCase } from 'src/app/domain/Alumnos/usecase/client/getAlumno';
import { FirestoreService } from '../listas/FirestoreListas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private datos_Locales: FirestoreService, private router: Router){
  }

  CerrarSesion() {
    this.datos_Locales.eliminar_DatoLocal("loggedIn");
    this.datos_Locales.guardar_DatoLocal("loggedIn", false);
    this.router.navigate(['/Sistema/Registro']);
  }
  Hola(): void {
    console.log("Hola")
  }

  ngOnInit(): void {

  }
}
