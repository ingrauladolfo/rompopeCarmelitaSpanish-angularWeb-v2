import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MisionVisionFilosofiaService {

  politica: any = [
    {
      tipo:'Misión',
      descripcion:`Elaborar el mejor Rompope y otras bebidas de sabores típicos mexicanos, con la más alta calidad y de manera artesanal contribuyendo en todo momento a rescatar los valores de la familia y la sana convivencia por medio de estas bebidas`
    },
    {
      tipo:'Visión',
      descripcion:`Ser la empresa número uno del mundo en la elaboración y comercialización de Rompopes y Licores con sabores tradicionales mexicanos`
    },
    {
      tipo:'Filosofía',
      descripcion:`Buscar ser un medio para que las familias se reunan`,
    },
    
  ]
  constructor() { }
  obtenerPolitica(){
    return this.politica;
  }
}
