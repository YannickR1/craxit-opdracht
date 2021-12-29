import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  handleLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
      .subscribe({
        next(res) {
          localStorage.setItem('token', res.token);
          console.log(res);
          alert('Logged in succesfully');
          localStorage.setItem('isLoggedIn', 'true')
          location.reload()
        }, error(msg) {
          alert(msg.error)
        }
      });
    }
  }
}
