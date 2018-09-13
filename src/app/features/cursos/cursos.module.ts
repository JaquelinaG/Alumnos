import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShareModule } from '../../share/share.module';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      { path: 'cursos' , component: CursosComponent},
    ])
  ],
  declarations: [
    CursosComponent,
  ]
})
export class CursosModule { }
