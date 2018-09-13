import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShareModule } from '../../share/share.module';
import { AlumnoItemComponent } from './alumno-item/alumno-item.component';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { AlumnoEdicionComponent } from './alumno-edicion/alumno-edicion.component';

import { AlumnosComponent } from './alumnos/alumnos.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
        { path: 'alumnos' , component: AlumnosComponent},
        { path: 'alumno/:operacion/:id', component: AlumnoEdicionComponent },
        { path: 'alumno/:operacion', component: AlumnoEdicionComponent },
    ])
  ],
  declarations: [
    AlumnoItemComponent,
    AlumnosListComponent,
    AlumnoEdicionComponent,
    AlumnosComponent
  ]
})
export class AlumnosModule { }
