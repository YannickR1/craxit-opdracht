import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  togglePassword()  {
    let el = document.getElementById("password") as HTMLInputElement
    let elTextLabel = document.getElementById("psw-toggle") as HTMLLabelElement
    if (el.type === "password") {
      el.type = "text"
      elTextLabel.innerHTML = "Hide password"
    } else {
      el.type = "password"
      elTextLabel.innerHTML = "Show password"
    }
  }

}
