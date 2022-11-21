import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascota } from '../modelos/Mascota.modelo';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {

   }

   GuardarRegistro(modelo: ModeloMascota): Observable<ModeloMascota> {
    return this.http.post<ModeloMascota>(`${this.url}/mascotas`, {
      nombre: modelo.nombre,
      foto: modelo.foto,
      estado: modelo.estado,
      especie: modelo.especie,
      comentario: modelo.comentario
    }, {
      headers: new HttpHeaders({
  
      })
    })
  }

  ActualizarRegistro(modelo: ModeloMascota): Observable<ModeloMascota> {
    return this.http.put<ModeloMascota>(`${this.url}/mascotas/${modelo.id}`,modelo, {
  
    
      headers: new HttpHeaders({
  
      })
    })
  }

  EliminarRegistro(modelo: ModeloMascota): Observable<any> {
    return this.http.delete<any>(`${this.url}/mascotas/${modelo.id}`, {
      headers: new HttpHeaders({
  
      })
    })
  }

  ListarRegistro(): Observable<ModeloMascota[]> {
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas/`, {
      headers: new HttpHeaders({
  
      })
    })
  }
}
