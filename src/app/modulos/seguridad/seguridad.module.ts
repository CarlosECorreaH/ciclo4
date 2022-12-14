import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { IdentificarUsuarioComponent } from './identificar-usuario/identificar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';

@NgModule({
  declarations: [
    RecuperarClaveComponent,
    IdentificarUsuarioComponent,
    CerrarSesionComponent,
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
