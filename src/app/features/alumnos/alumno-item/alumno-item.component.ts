import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Alumno } from '../../../entities/alumno.entity';
import { PerfilesList } from '../../../Core/items-list.service';

@Component({
  selector: 'app-alumno-item',
  templateUrl: './alumno-item.component.html',
  styleUrls: ['./alumno-item.component.css']
})
export class AlumnoItemComponent implements OnInit {

  @Input() alumno: Alumno;
  @Input() seleccionado = false;
  @Output() seleccion = new EventEmitter<Alumno>();

  constructor(
    private perfiles: PerfilesList
  ) { }

  ngOnInit() {

  }

  perfil( perfilID: number) {
    return this.perfiles.Descripcion(perfilID);
  }

  seleccionar() {
    this.seleccion.emit(this.alumno);
  }


}
