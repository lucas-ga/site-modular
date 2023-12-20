import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass'
})
export class UserListComponent implements OnInit{

  constructor() {}
  ngOnInit(): void {}

  users = [
    { name: 'Lucas', birthDate: '15/08/1999', login: 'lucas.silva', password: 'leleh'},
    { name: 'Letícia', birthDate: '27/04/2002', login: 'leticia.menega', password: 'luquinhas'},
    { name: 'zequinha', birthDate: '01/01/1864', login: 'ze.quinha', password: 'zeze'}
  ]
}
