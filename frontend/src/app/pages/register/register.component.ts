import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    })
  }

  handleRegister(){
    if (this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe((result) =>{
        if (this.registerForm.valid) {
          alert('register sucess')
          console.log(result)
        } else {
          alert('failed to register')
        }
      })
    }
  }
}
