import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buttons', loadChildren: () => import('./pages/buttons/buttons.module').then(m => m.ButtonsModule) },
  { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
