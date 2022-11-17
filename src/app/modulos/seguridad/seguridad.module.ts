import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { IdentificarUsuarioComponent } from './identificar-usuario/identificar-usuario.component';
import { PermisosrUsuarioComponent } from './permisosr-usuario/permisosr-usuario.component';


@NgModule({
  declarations: [
    RecuperarClaveComponent,
    IdentificarUsuarioComponent,
    PermisosrUsuarioComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
