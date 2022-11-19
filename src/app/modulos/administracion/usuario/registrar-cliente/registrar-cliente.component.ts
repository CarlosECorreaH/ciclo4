import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'Nombres':['', [Validators.required]],
    'Apellidos':['', [Validators.required]],
    'cedula':['', [Validators.required]],
    'correo':['', [Validators.required]],
    'telefono':['', [Validators.required]],
    'rol':['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private servicioUsuario: UsuarioService, private router: Router) {  }

  ngOnInit(): void {
    
  }

  GuardarUsuario(){
    let nombre = this.fgValidador.controls['Nombres'].value;
    let apellido = this.fgValidador.controls['Apellidos'].value;
    let cedula = this.fgValidador.controls['cedua'].value;
    let correo = this.fgValidador.controls['correo'].value;
    let telefono = this.fgValidador.controls['telefono'].value;
    let rol = this.fgValidador.controls['rol'].value;
    let p = new ModeloUsuario();
    p.nombre = nombre;
    p.apellido = apellido;
    p.cedula = cedula;
    p.correo = correo;
    p.telefono = telefono;
    p.rol = rol;
    this.servicioUsuario.CrearUsuario(p).subscribe((datos: ModeloUsuario)=> {
      alert('guardado con exito');
      this.router.navigate(["/administracion/ver-tabla"]);
    },(error:any)=>{
      alert('Error al guardar');
    })
    
  }

}
