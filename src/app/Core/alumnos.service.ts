import { Injectable } from '@angular/core';

import { Alumno } from '../entities/alumno.entity';

@Injectable()
export class AlumnosService {

  private _alumnos: Alumno[] = [
    {id: 1, nombre: 'Juan', apellido: 'Perez', sexoID: 1, perfilID: 0, activo: true},
    {id: 2, nombre: 'Pedro', apellido: 'Garcia', sexoID: 1, perfilID: 1, activo: true},
    {id: 3, nombre: 'Ana', apellido: 'Romero', sexoID: 0, perfilID: 2, activo: true},
    {id: 4, nombre: 'Maria', apellido: 'Gutierrez', sexoID: 0, perfilID: 1, activo: true},
    {id: 5, nombre: 'Esteban', apellido: 'Smith', sexoID: 1, perfilID: 2, activo: true}
  ];

  constructor() { }

  GetAll(): Alumno[] {
    return this._alumnos;
  }

  Get(id: number): Alumno {
    return this._alumnos.find(a => a.id === id);
  }

  SearchbyNombreApellido(nombre: string) {
    return this._alumnos
                .filter(a =>
                  (a.nombre + ' ' + a.apellido).toLowerCase()
                   .indexOf(nombre.toLowerCase()) >= 0 );
  }

  Add(alumno: Alumno): number {

    alumno.id = new Date().valueOf(); // "unique" id
    this._alumnos.push(alumno);
    return alumno.id;
  }

  Delete(id: number): void {

    const index = this._alumnos.findIndex( (a) => a.id === id);
    this._alumnos.splice(index, 1);

  }

  Update(alumno: Alumno) {
    const index = this._alumnos.findIndex( (a) => a.id === alumno.id);
    if (index >= 0) {
      this._alumnos[index] = alumno;
    } else {
      throw new Error('alumno inexistente');
    }
  }

}

