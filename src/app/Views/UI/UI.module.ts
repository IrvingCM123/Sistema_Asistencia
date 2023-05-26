import { NgModule } from '@angular/core';
import { UIRoutingModule } from './UI-routing.module';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio';
import { MenuComponent } from './menu';
import { OperacionMateriaComponent } from './operacion-materia/operacion-materia.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { Listas } from './listas/listas.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    UIRoutingModule,
    FormsModule
  ],
  declarations: [
    InicioComponent,
    OperacionMateriaComponent,
    Listas,
  ]
})

export class UIModule { }
