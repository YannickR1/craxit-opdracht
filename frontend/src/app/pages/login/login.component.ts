import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }


  onLogin(){
    if(!this.username){
      alert('Please enter a username')
      return
    }
    if(!this.password){
      alert('Please enter a password')
      return
    }
  }
}
