import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.sass'
})
export class UserRegistrationComponent {

  constructor(private UserService: UserService){}

  applyForm = new FormGroup({
    name: new FormControl(''),
    birthDate: new FormControl(),
    login: new FormControl('')
  });

  today:Date

  submitRegistration() {
    this.UserService.submitRegistration(
      this.applyForm.value.name ?? '',
      this.applyForm.value.birthDate ?? this.today,
      this.applyForm.value.login ?? ''
    );
  }

}
