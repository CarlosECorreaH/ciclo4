import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { VerMascotaComponent } from './mascota/ver-mascota/ver-mascota.component';
import { CrearProspectoComponent } from './prospecto/crear-prospecto/crear-prospecto.component';
import { EditarClienteComponent } from './usuario/editar-cliente/editar-cliente.component';
import { RegistrarClienteComponent } from './usuario/registrar-cliente/registrar-cliente.component';

const routes: Routes = [
  {
    path: 'crear-usuario',
    component: RegistrarClienteComponent
  },
  {
    path: 'editar-usuario',
    component: EditarClienteComponent    
  },
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent
  },
  {
    path: 'editar-mascota',
    component: EditarMascotaComponent
  },
  {
    path: 'eliminar-mascota',
    component: EliminarMascotaComponent
  },
  {
    path: 'ver-mascota',
    component: VerMascotaComponent
  },
  {
    path: 'crear-prospecto',
    component: CrearProspectoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
