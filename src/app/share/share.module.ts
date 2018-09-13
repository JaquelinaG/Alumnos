import { FormsModule } from '@angular/forms';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
          MatIconModule, MatListModule, MatFormFieldModule, MatInputModule,
          MatCardModule, MatSelectModule, MatCheckboxModule , MatRadioModule,
          MatOptionModule, MatTableModule, MatMenuModule
          } from '@angular/material';

import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatOptionModule,
    MatTableModule,
    MatMenuModule
  ],
  exports: [
    SearchBoxComponent,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatOptionModule,
    MatTableModule,
    MatMenuModule
  ],

})
export class ShareModule { }
