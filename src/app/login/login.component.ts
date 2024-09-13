import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../login.service';
import { TasksetService } from '../taskset.service';
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
    private loginService: LoginService,
    private tasksetService: TasksetService,

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
        localStorage.setItem('user_Id', data.user_id);
        localStorage.setItem('user_name', data.username);
        this.tokenGenerated = true;
        if (this.tokenGenerated) {
          this.tasksetService.getUserTasksets();

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
