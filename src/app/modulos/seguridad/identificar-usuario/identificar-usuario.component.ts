import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoJS = require( "crypto-js");

@Component({
  selector: 'app-identificar-usuario',
  templateUrl: './identificar-usuario.component.html',
  styleUrls: ['./identificar-usuario.component.css']
})
export class IdentificarUsuarioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    "usuario": [" ",[Validators.required, Validators.email]],
    "clave":[" ",[Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private servicioSeguridad: SeguridadService, private router: Router) {

  }
 
  ngOnInit(): void {
   
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let ClaveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, ClaveCifrada).subscribe((datos:any) => {
      //ok
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(['/inicio'])
    }, (error:any) => {
      alert('Datos Invalidos')
    })
  }

  
}
