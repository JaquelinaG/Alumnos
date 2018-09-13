import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShareModule } from '../../share/share.module';
import { AsistenciasComponent } from './asistencias/asistencias.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      { path: 'asistencias' , component: AsistenciasComponent}
    ])
  ],
  declarations: [
    AsistenciasComponent,
  ]
})
export class AsistenciasModule { }
