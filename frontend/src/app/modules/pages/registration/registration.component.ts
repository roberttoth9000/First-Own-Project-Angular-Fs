import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registerForm = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$'),
        ])
      ),
      passwordConfirm: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$'),
        ])
      ),
    }
    // [this.passwordMatchValidator('password','passwordConfirm')]
  );

  constructor() {}

  ngOnInit(): void {}
}
