import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  tokenGenerated = false;
  constructor(
    public loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  userLogin() {
    // console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.tokenGenerated = true;
        if (this.tokenGenerated) {
          this.router.navigate(['/tasksets']).then(() => {
            window.location.reload();
          });
        } else {
          this.router.navigate(['/login']);
        }
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
