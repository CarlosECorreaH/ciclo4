import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { AfiliarMascotaComponent } from './afiliar-mascota/afiliar-mascota.component';
import { VerMascotaComponent } from './ver-mascota/ver-mascota.component';


@NgModule({
  declarations: [
    AfiliarMascotaComponent,
    VerMascotaComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }
