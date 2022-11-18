import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarranavegacionComponent } from './plantilla/barranavegacion/barranavegacion.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { PiepaginaComponent } from './plantilla/piepagina/piepagina.component';
import { Error404Component } from './plantilla/errores/error404/error404.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BarranavegacionComponent,
    InicioComponent,
    PiepaginaComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
