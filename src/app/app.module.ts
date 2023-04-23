import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './Views';
import { DocenteComponent } from './Views/UI/docente/docente.component';

import { AlumnosPort } from './config/ports/Alumnos/alumnos-ports';
import { AlumnoAdapter } from './config/adapters/Alumnos/alumnos-adapter';

import { DocentesPort } from './config/ports/Docentes/docentes-ports';
import { DocenteAdapter } from './config/adapters/Docentes/docentes-adapter';

import { ListasPort } from './config/ports/listas/listas-ports';
import { ListasAdapter } from './config/adapters/Listas/listas-adapter';

import { MateriasPort } from './config/ports/Materias/materias-port';
import { MateriasAdapter } from './config/adapters/Materias/materias-adapter';
import { Listas } from './Views/UI/listas/listas.component';
import { BajaMateriaComponent } from './Views/UI/baja-materia/baja-materia.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DocenteComponent,
    BajaMateriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: AlumnosPort, useClass: AlumnoAdapter},
    {provide: DocentesPort, useClass: DocenteAdapter},
    {provide: MateriasPort, useClass: MateriasAdapter},
    {provide: ListasPort, useClass: ListasAdapter},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
