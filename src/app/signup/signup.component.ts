import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signUpForm!: FormGroup;
  constructor(
    public loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.signUpForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  userSignUp() {
    // console.log(this.loginForm.value);
    this.loginService.signup(this.signUpForm.value).then((data) => {
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
    });
  }
}
