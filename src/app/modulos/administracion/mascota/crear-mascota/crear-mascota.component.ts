import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/Mascota.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  fgValidacion: FormGroup= this.fb.group({
    'nombre':['', [Validators.required]],
    'especie':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'estado':['', [Validators.required]],
    'comentario':['', [Validators.required]]
    
  });

  constructor(private fb:FormBuilder, private serviciosMascotas: MascotaService, private router: Router){ } 

  ContruirFormulario(){
    this.fgValidacion=this.fb.group({
      nombre:['',Validators.required],
      especie:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.ContruirFormulario();
  }

  get ObtenerFGV(){
    return this.fgValidacion.controls;
  }

  GuardarRegistro(){
    let nombre = this.fgValidacion.controls['nombre'].value;
    let especie = this.fgValidacion.controls['especie'].value;
    let foto = this.fgValidacion.controls['foto'].value;
    let comentario = this.fgValidacion.controls['comentario'].value;
    let estado = this.fgValidacion.controls['estado'].value;
    
    let p = new ModeloMascota();
    p.nombre = nombre;
    p.especie = especie;
    p.foto = foto;
    p.comentario = comentario;
    p.estado = estado;
    this.serviciosMascotas.GuardarRegistro(p).subscribe({
      next: (datos:ModeloMascota) =>{
        console.log(datos);
        alert('guardado con exito');
        this.router.navigate(['/crear-mascota'])
      }, error:(error:any)=>{
        alert('error al guardar');
      }
  })
  }
}
