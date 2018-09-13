import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Alumno } from '../../../entities/alumno.entity';
import { AlumnosHttpService } from '../../../Core/alumnos-http.service';
import { ItemList} from '../../../entities/item-list.entity';
import { PerfilesList, SexosList } from '../../../Core/items-list.service';
import { StateService } from '../../../state.service';

@Component({
  selector: 'app-alumno-edicion',
  templateUrl: './alumno-edicion.component.html',
  styleUrls: ['./alumno-edicion.component.css']
})
export class AlumnoEdicionComponent implements OnInit {

  alumno: Alumno;
  operacion: string;

  constructor(
    private _sexosList: SexosList,
    private _PerfilesList: PerfilesList,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosHttpService,
    private stateSrv: StateService
  ) { }

  ngOnInit() {
    this.operacion = this.activatedRoute.snapshot.paramMap.get('operacion');
    if (this.operacion === 'editar') {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.alumnosService.Get(id)
                          .subscribe(alumno => this.alumno = alumno);
      this.stateSrv.tituloPrincipalUpdate('Edición de alumno');
    } else {
      this.alumno = new Alumno( 0, '', '', 1, true, 1);
      this.stateSrv.tituloPrincipalUpdate('Agregar nuevo alumno');
    }
  }

  GetPerfiles(): ItemList[] {
    return this._PerfilesList.list;
  }

  GetSexos(): ItemList[] {
    return this._sexosList.list;
  }

  Regresar() {
    this.router.navigate(['/alumnos']);
  }

  Guardar( form: any) {

    Object.keys(form).forEach((key, index) =>
      this.alumno[key] = form[key]
    );

    if (this.operacion === 'editar') {
      this.alumnosService.Update(this.alumno)
                         .subscribe( () =>
                            this.Regresar()
                         );
    } else {
      this.alumnosService.Add(this.alumno)
                        .subscribe( () =>
                            this.Regresar()
                        );
    }


  }


}
