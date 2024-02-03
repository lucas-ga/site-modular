import { Injectable } from '@angular/core';
import { User } from '../user'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_LIST: User[] = [
    { name: 'Lucas', birthDate: new Date('1999-08-15'), login: 'lucas.silva', password: 'leleh', _id: 1},
    { name: 'Letícia', birthDate: new Date('2002-04-27'), login: 'leticia.menegazzi', password: 'luquinhas', _id: 2},
    { name: 'zequinha', birthDate: new Date('1864-01-01'), login: 'ze.quinha', password: 'zeze', _id: 3}
  ]

  getAllUsers(): Observable<User[]> {
    return of(this.USER_LIST);
  }

  getUserById(id: number): User | undefined{
    return this.USER_LIST.find(User => User._id === id);
  }

  submitRegistration(name: string, birthDate: Date, login: string): string {
    console.log('Cadastrado -> nome: ${name}, nascimento: $(birthDate), usuário: $(login)');
    return 'Erro ao cadastrar';
  }

  constructor() {}
}
