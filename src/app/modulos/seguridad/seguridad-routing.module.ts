import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificarUsuarioComponent } from './identificar-usuario/identificar-usuario.component';

const routes: Routes = [
  {
    path: 'identificar',
    component: IdentificarUsuarioComponent    
  },
  {
    path: 'cerrar-sesion',
    component: CerrarSesionComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
