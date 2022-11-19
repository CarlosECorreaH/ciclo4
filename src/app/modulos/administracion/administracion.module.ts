import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { ProspectoComponent } from './prospecto/prospecto.component';
import { PlanComponent } from './plan/plan.component';
import { ProductoServicioComponent } from './producto-servicio/producto-servicio.component';
import { RegistrarClienteComponent } from './usuario/registrar-cliente/registrar-cliente.component';
import { EditarClienteComponent } from './usuario/editar-cliente/editar-cliente.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { VerMascotaComponent } from './mascota/ver-mascota/ver-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { CrearProspectoComponent } from './prospecto/crear-prospecto/crear-prospecto.component';
import { VerClienteComponent } from './usuario/ver-cliente/ver-cliente.component';
import { MascotaComponent } from './mascota/mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    SucursalComponent,
    ProspectoComponent,
    PlanComponent,
    ProductoServicioComponent,
    RegistrarClienteComponent,
    EditarClienteComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    VerMascotaComponent,
    EliminarMascotaComponent,
    CrearProspectoComponent,
    VerClienteComponent,
    MascotaComponent,
    CrearMascotaComponent,
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
