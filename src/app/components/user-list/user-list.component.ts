import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass',
})
export class UserListComponent implements OnInit {
  USER_LIST: User[] = [];
  displayedColumns: string[] = ['_id', 'name', 'birthDate', 'login'];
  dataSource: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.USER_LIST = users;
      this.dataSource = users; // Assign to dataSource directly
    }, (error: any) => {
      console.error('Error fetching users:', error);
      // Handle error gracefully, e.g., display an error message
    });
  }
}
