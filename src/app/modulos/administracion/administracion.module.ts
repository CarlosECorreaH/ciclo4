import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { ProspectoComponent } from './prospecto/prospecto.component';
import { PlanComponent } from './plan/plan.component';
import { ProductoServicioComponent } from './producto-servicio/producto-servicio.component';
import { RegistrarClienteComponent } from './usuario/registrar-cliente/registrar-cliente.component';
import { EditarClienteComponent } from './usuario/editar-cliente/editar-cliente.component';
import { RegistrarMascotaComponent } from './mascota/registrar-mascota/registrar-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { VerMascotaComponent } from './mascota/ver-mascota/ver-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { CrearProspectoComponent } from './prospecto/crear-prospecto/crear-prospecto.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    MascotasComponent,
    SucursalComponent,
    ProspectoComponent,
    PlanComponent,
    ProductoServicioComponent,
    RegistrarClienteComponent,
    EditarClienteComponent,
    RegistrarMascotaComponent,
    EditarMascotaComponent,
    VerMascotaComponent,
    EliminarMascotaComponent,
    CrearProspectoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
