export class Alumno {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public sexoID: number,
    public activo: boolean,
    public perfilID: number
  ) {}
}
