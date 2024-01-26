import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

const USER_LIST: User[] = [
  { name: 'Lucas', birthDate: new Date('1999-08-15'), login: 'lucas.silva', password: 'leleh', _id: 1},
  { name: 'Letícia', birthDate: new Date('2002-04-27'), login: 'leticia.menegazzi', password: 'luquinhas', _id: 2},
  { name: 'zequinha', birthDate: new Date('1864-01-01'), login: 'ze.quinha', password: 'zeze', _id: 3}
]
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass',
})
export class UserListComponent implements OnInit{

  constructor() {}
  ngOnInit(): void {}

  displayedColumns: string[] = ['_id','name','birthDate','login'];
  dataSource = USER_LIST;
}
