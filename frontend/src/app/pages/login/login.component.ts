import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    })
  }

  handleLogin(){
    if (this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe((result) =>{
        if (this.loginForm.valid) {
          alert('login sucess')
          console.log(result)
          localStorage.setItem('token', result.token)
          localStorage.setItem('isLoggedIn', 'false')
        } else {
          alert('failed to login')
        }
      })
    }
  }
}
