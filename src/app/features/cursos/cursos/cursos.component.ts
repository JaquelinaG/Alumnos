import { Component, OnInit } from '@angular/core';

import { StateService } from '../../../state.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(
    private stateSrv: StateService
  ) { }

  ngOnInit() {
    this.stateSrv.tituloPrincipalUpdate('Cursos');
  }

}
