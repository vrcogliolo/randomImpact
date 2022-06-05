export class PersonajeModel{
  nombre: string;
  arma: string;
  elemeto: string;
  rol: string;
  foto: string;
  constructor(n: string, arma: string, elemento: string, rol: string, foto: string) {
    this.nombre = n;
    this.arma = arma;
    this.elemeto = elemento;
    this.rol = rol;
    this.foto = foto;
  }
}
