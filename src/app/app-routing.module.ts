import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificarUsuarioComponent } from './modulos/seguridad/identificar-usuario/identificar-usuario.component';
import { Error404Component } from './plantilla/errores/error404/error404.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: 'seguridad',
    loadChildren: ()=>import('./modulos/seguridad/seguridad.module').then(m=>m.SeguridadModule)
  },
  {
    path: 'administracion',
    loadChildren: ()=>import('./modulos/administracion/administracion.module').then(m=>m.AdministracionModule)
  },
  {
    path: 'solicitudes',
    loadChildren: ()=>import('./modulos/solicitudes/solicitudes.module').then(m=>m.SolicitudesModule)
  },
 
  // ultima ruta error
  {
    path:'**',
    redirectTo: '/404'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
