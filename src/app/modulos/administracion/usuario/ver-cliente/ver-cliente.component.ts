import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {

  listadoRegistros: ModeloUsuario[] = [];

  constructor(private usuarioServicio: UsuarioService) { }

  ngOnInit(): void {

  }

  ObtenerListadoUsuarios() {
    this.usuarioServicio.ObtenerRegistros().subscribe((datos: ModeloUsuario[]) => {
      this.listadoRegistros=datos;
    })
  }

}
