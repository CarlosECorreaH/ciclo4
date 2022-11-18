import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identificar-usuario',
  templateUrl: './identificar-usuario.component.html',
  styleUrls: ['./identificar-usuario.component.css']
})
export class IdentificarUsuarioComponent {

  fgValidacion: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {

  }
  construirformulario() {
    this.fgValidacion = this.fb.group({
      correo:['',Validators.required],
      clave: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.construirformulario();
  }

  get ObtenerFGV(){
    return this.fgValidacion.controls;
  }

}
