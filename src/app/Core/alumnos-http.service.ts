import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Alumno } from '../entities/alumno.entity';

class AlumnoHTTP {
  constructor(
      public _id: number,
      public nombre: string,
      public apellido: string,
      public sexo: number,
      public perfil: number,
      public activo: boolean
  ) {}
}


@Injectable()
export class AlumnosHttpService {

  private alumnosUrl = 'http://localhost:4100/alumnos';

  constructor(
    private httpClient: HttpClient
  ) { }

  GetAll(): Observable<Alumno[]> {
    return this.httpClient
      .get<AlumnoHTTP[]>(this.alumnosUrl)
      .pipe(
          map( alumnosHttp =>
               alumnosHttp.map(al =>
                               new Alumno(al._id, al.nombre, al.apellido, al.sexo, al.activo, al.perfil)
                              )
          )
      );
  }


  Get(id: Number): Observable<Alumno> {

    const url = `${this.alumnosUrl}/${id}`;
    return this.httpClient
                    .get<AlumnoHTTP>(url)
                    .pipe(
                        map(al => new Alumno(al._id, al.nombre, al.apellido, al.sexo, al.activo, al.perfil))
                    );
  }

  Delete(id: number): Observable<void> {
    const url = `${this.alumnosUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }

  Update(alumno: Alumno): Observable<void>   {
    const url = `${this.alumnosUrl}/${alumno.id}`;

    const al = new AlumnoHTTP(alumno.id, alumno.nombre, alumno.apellido, alumno.sexoID, alumno.perfilID, alumno.activo);

    return this.httpClient.put<void>(url, al);
  }

  Add(alumno: Alumno): Observable<void>   {
    const url = `${this.alumnosUrl}/${alumno.id}`;

    const al = new AlumnoHTTP(alumno.id, alumno.nombre, alumno.apellido, alumno.sexoID, alumno.perfilID, alumno.activo);

    return this.httpClient.post<void>(url, al);
  }

  SearchbyNombreApellido(nombre: string): Observable<Alumno[]> {
    return this.GetAll()
    .pipe(
      map( alumnos =>
         alumnos.filter(a =>
            (a.nombre + ' ' + a.apellido).toLowerCase().indexOf(nombre.toLocaleLowerCase()) >= 0
        )
      )
    );
  }




}
