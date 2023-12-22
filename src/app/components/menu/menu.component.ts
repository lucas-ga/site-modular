import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {
  menu = [
    {name: 'Início', path: '/'},
    {name: 'Lista de Usuários', path: '/user-list'},
    {name: 'Cadastro de Usuários', path: '/user-registration'}
  ]
}
