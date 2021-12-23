import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  togglePassword()  {
    let el = document.getElementById("psw") as HTMLInputElement
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
