import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Alumno } from '../../../entities/alumno.entity';

import { AlumnosHttpService } from '../../../Core/alumnos-http.service';
import { StateService } from '../../../state.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: Alumno[];
  alumnoSeleccionado: Alumno;

  constructor(
    private _alumnosData: AlumnosHttpService,
    private router: Router,
    private stateSrv: StateService
  ) {

  }


  ngOnInit() {
    // this.alumnos = this._alumnosData.GetAll();
    this._alumnosData.GetAll().subscribe( alumnos => this.alumnos = alumnos);
    this.stateSrv.tituloPrincipalUpdate('Alumnos');
  }

  seleccionarAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
  }

  filtrar(filtrar: string) {
    this._alumnosData.SearchbyNombreApellido(filtrar)
                     .subscribe(alumnos => this.alumnos = alumnos);
  }

  agregar() {
    this.router.navigate(['/alumno', 'agregar']);
  }
}
