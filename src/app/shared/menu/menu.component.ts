import { Component, OnInit } from '@angular/core';
interface IMenuItem {
  ruta: string,
  texto: string
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent implements OnInit {

  menu: IMenuItem[] = [
    { ruta: '/graficas/barra', texto: 'Barra' },
    { ruta: '/graficas/barra-doble', texto: 'Barra Doble' },
    { ruta: '/graficas/dona', texto: 'Dona' },
    { ruta: '/graficas/dona-http', texto: 'Dona Http' }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
