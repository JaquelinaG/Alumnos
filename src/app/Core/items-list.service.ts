import { Injectable } from '@angular/core';
import { ItemList } from '../entities/item-list.entity';

export class GenericList {
  public list: ItemList[];

  public Descripcion(id: number) {
    return this.list.find(item => item.id === id).descripcion;
  }
}

@Injectable()
export class PerfilesList extends GenericList  {
  constructor() {
    super();
    this.list = [
      new ItemList( 0, 'Desarrollador'),
      new ItemList( 1, 'IT'),
      new ItemList( 2, 'Power User'),
      new ItemList( 3, 'DevOp'),
    ];
  }
}

@Injectable()
export class SexosList extends GenericList {
  constructor() {
    super();
    this.list = [
      new ItemList( 0, 'Femenino'),
      new ItemList( 1, 'Masculino'),
      new ItemList( 2, 'Otro')
    ];
  }
}



