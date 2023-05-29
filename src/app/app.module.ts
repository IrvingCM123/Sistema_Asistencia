import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireAuthModule  } from '@angular/fire/compat/auth';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

import { ListadoComponent, MenuComponent } from './Views';
import { DocenteComponent } from './Views/UI/docente/docente.component';
import { BajaMateriaComponent } from './Views/UI/baja-materia/baja-materia.component';
import { RegistroComponent } from './Views/UI/registro/registro.component';
import { LoginComponent } from './Views/UI/login/login.component';

import { AlumnosPort } from './config/ports/Alumnos/alumnos-ports';
import { AlumnoAdapter } from './config/adapters/Alumnos/alumnos-adapter';

import { DocentesPort } from './config/ports/Docentes/docentes-ports';
import { DocenteAdapter } from './config/adapters/Docentes/docentes-adapter';

import { ListasPort } from './config/ports/listas/listas-ports';
import { ListasAdapter } from './config/adapters/Listas/listas-adapter';

import { MateriasPort } from './config/ports/Materias/materias-port';
import { MateriasAdapter } from './config/adapters/Materias/materias-adapter';

import { CuentasPort } from './config/ports/Formularios/formulario-ports';
import { CuentasAdapter } from './config/adapters/Formularios/formularios-adapter';

import { ListaAsistencia_Port } from './config/ports/ListaAsistencia/ListaAsistencia-ports';
import { ListaAsistenciaAdapter } from './config/adapters/ListaAsistencia/ListaAsistencia-adapter';

import { EscanerDatos_Port } from './config/ports/EscanerDatos/EscanerDatos-port';
import { EscanerDatosAdapter } from './config/adapters/EscanerDatos/EscanerDatos-adapter';

import { MensajeriaAdapter } from './config/adapters/Mensajeria/Mensajeria-adapter';
import { MensajeriaPort } from 'src/app/config/ports/Mensajeria/Mensajeria-ports';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DocenteComponent,
    RegistroComponent,
    BajaMateriaComponent,
    ListadoComponent,
    LoginComponent
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
    {provide: CuentasPort, useClass: CuentasAdapter},
    {provide: ListaAsistencia_Port, useClass: ListaAsistenciaAdapter},
    {provide: EscanerDatos_Port, useClass: EscanerDatosAdapter},
    {provide: MensajeriaPort, useClass: MensajeriaAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
