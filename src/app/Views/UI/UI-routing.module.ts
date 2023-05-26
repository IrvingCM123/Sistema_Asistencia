import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio';
import { OperacionMateriaComponent } from './operacion-materia';
import { ListadoComponent } from './listado/listado.component';
import { BajaMateriaComponent } from './baja-materia';
import { Listas } from './listas';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'Registro', pathMatch: 'full' },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Login', component: LoginComponent},
  { path: 'Inicio', component: InicioComponent },
  { path: 'Inicio/Alta_Materia', component: OperacionMateriaComponent },
  { path: 'Inicio/Baja_Materia', component: BajaMateriaComponent },
  { path: 'Inicio/Listado', component: ListadoComponent },
  { path: 'Inicio/Listas', component: Listas}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIRoutingModule {}
