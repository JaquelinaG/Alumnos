import { Component, OnInit } from '@angular/core';

import { StateService } from '../../../state.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css']
})
export class AsistenciasComponent implements OnInit {

  constructor(
    private stateSrv: StateService
  ) { }

  ngOnInit() {
    this.stateSrv.tituloPrincipalUpdate('Asistencias');
  }

}
