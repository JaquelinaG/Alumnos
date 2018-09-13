import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { AlumnosHttpService } from '../../../Core/alumnos-http.service';
import { Alumno } from '../../../entities/alumno.entity';
import { PerfilesList, SexosList } from '../../../Core/items-list.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  private _alumnos: Alumno[];
  @Input()
  get alumnos() {
    return this._alumnos;
  }
  set alumnos(al: Alumno[]) {
    this._alumnos = al;
    this.dataSource = new MatTableDataSource(al);
  }


  @Input() alumnoSeleccionado: Alumno;
  @Output() seleccionar = new EventEmitter<Alumno>();

  dataSource: MatTableDataSource<Alumno>;
  displayedColumns = ['id', 'nombre', 'apellido', 'perfilID', 'sexoID', 'activo', 'acciones'];

  constructor(
    public perfilesListSrv: PerfilesList,
    public sexosListSrv: SexosList,
    private router: Router,
    private alumnosSrv: AlumnosHttpService
  ) { }

  ngOnInit() {

  }

  editar(id: number) {
    this.router.navigate(['/alumno', 'editar', id]);
  }

  eliminar(id: number) {
    this.alumnosSrv.Delete(id)
                   .subscribe( () =>
                          this.alumnosSrv.GetAll()
                                        .subscribe(alumnos => this.alumnos = alumnos)
                    );
  }

}
