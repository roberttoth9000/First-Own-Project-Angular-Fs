import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IApiResponseMessageModel } from 'src/app/core/models/IApiResponseMessageModel';
import { IRegisterUser } from 'src/app/core/models/IRegisterUser';
import { AuthService } from 'src/app/core/services/authentication/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  messageFromServer: string = '';
  errorMessage: string = '';

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
    }
    // [this.passwordMatchValidator('password','passwordConfirm')]
  );

  constructor(private authservice: AuthService) {}

  onSubmit(): void {
    const registerValues: IRegisterUser = this.registerForm.value;
    const finalRegisterForm = {
      username: registerValues.username,
      email: registerValues.email,
      password: registerValues.password,
    };

    if (this.registerForm.valid) {
      this.authservice
        .addNewUser(finalRegisterForm)
        .subscribe((messageFromServer: IApiResponseMessageModel) => {
          this.messageFromServer = `${messageFromServer.message}`;
        });
    } else {
      this.errorMessage = 'Invalid form!';
    }
  }

  ngOnInit(): void {}
}
