import { UIModule } from './Views/UI/UI.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Sistema', pathMatch: 'full'},
  { path: 'Sistema', loadChildren: () => import('./Views/UI').then(m => m.UIModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
