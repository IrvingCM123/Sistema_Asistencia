import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio';
import { OperacionMateriaComponent } from './operacion-materia';
import { ListadoComponent } from './listado/listado.component';
import { BajaMateriaComponent } from './baja-materia';

const routes: Routes = [
  { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
  { path: 'Inicio', component: InicioComponent },
  { path: 'Alta_Materia', component: OperacionMateriaComponent },
  { path: 'Baja_Materia', component: BajaMateriaComponent },
  { path: 'Listado', component: ListadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIRoutingModule {}
