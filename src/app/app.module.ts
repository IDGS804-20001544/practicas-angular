import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaModule } from './distancia/distancia.module';
import { ResistenciaModule } from './resistencia/resistencia.module';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { CinepolisModule } from './cinepolis/cinepolis.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanciaModule,
    ResistenciaModule,
    CinepolisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
