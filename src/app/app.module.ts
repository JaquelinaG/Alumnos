import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './Core/core.module';
import { ShareModule } from './share/share.module';

import { CursosModule } from './features/cursos/cursos.module';
import { AsistenciasModule } from './features/asistencias/asistencias.module';
import { AlumnosModule } from './features/alumnos/alumnos.module';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    ShareModule,
    BrowserAnimationsModule,

    CursosModule,
    AsistenciasModule,
    AlumnosModule,

    HttpClientModule,
    RouterModule.forRoot([
      { path: '',  redirectTo: '/alumnos', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
