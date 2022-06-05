import { Component, OnInit } from '@angular/core';
import {PersonajeModel} from "../../models/personaje-model";
import {listaPersonajes} from "../../dummy/lista-personajes";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  listaTemporal: PersonajeModel[] = listaPersonajes;
  monstrarLista: PersonajeModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  random(){
    if(this.listaTemporal.length > 0){
      let indice = Math.floor(Math.random()*(this.listaTemporal.length));
      console.log(indice);
      this.monstrarLista.push(this.listaTemporal[indice]);
      this.listaTemporal = this.listaTemporal.filter((item) => item.nombre !== this.listaTemporal[indice].nombre);
    }
  }
  clean(){
    this.monstrarLista = [];
    this.listaTemporal = listaPersonajes;
  }
  color(elemento: string):string{
    switch (elemento){
      case 'Geo': return '#ffc500';
      case 'Cryo': return '#34d6f3';
      case 'Pyro': return '#fa0000';
      case 'Hydro': return '#346ef3';
      case 'Electro': return '#8353b7';
      case 'Anemo': return '#34f3c0';
      default: return '#ffffff'
    }
  }
}
