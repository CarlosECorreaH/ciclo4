import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificarUsuarioComponent } from './identificar-usuario/identificar-usuario.component';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    component: IdentificarUsuarioComponent    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
