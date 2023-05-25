import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireAuthModule  } from '@angular/fire/compat/auth';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListadoComponent, MenuComponent } from './Views';
import { DocenteComponent } from './Views/UI/docente/docente.component';

import { AlumnosPort } from './config/ports/Alumnos/alumnos-ports';
import { AlumnoAdapter } from './config/adapters/Alumnos/alumnos-adapter';

import { DocentesPort } from './config/ports/Docentes/docentes-ports';
import { DocenteAdapter } from './config/adapters/Docentes/docentes-adapter';

import { ListasPort } from './config/ports/listas/listas-ports';
import { ListasAdapter } from './config/adapters/Listas/listas-adapter';

import { MateriasPort } from './config/ports/Materias/materias-port';
import { MateriasAdapter } from './config/adapters/Materias/materias-adapter';
import { BajaMateriaComponent } from './Views/UI/baja-materia/baja-materia.component';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { FormularioPort } from './config/ports/Formularios/formulario-ports';
import { FormulariosAdapter } from './config/adapters/Formularios/formularios-adapter';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RegistroComponent } from './Views/UI/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DocenteComponent,
    RegistroComponent,
    BajaMateriaComponent,
    ListadoComponent,
  ],
  imports: [
    AngularFireAuthModule,
    FirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    CommonModule,
  ],
  providers: [
    {provide: AlumnosPort, useClass: AlumnoAdapter},
    {provide: DocentesPort, useClass: DocenteAdapter},
    {provide: MateriasPort, useClass: MateriasAdapter},
    {provide: ListasPort, useClass: ListasAdapter},
    {provide: FormularioPort, useClass: FormulariosAdapter},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
