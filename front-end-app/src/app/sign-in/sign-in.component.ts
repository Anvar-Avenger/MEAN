import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";
import { RequestService } from "../request.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  name: string = '';
  password: string = '';

  message: {
    show: boolean,
    text: string
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private murojaat: RequestService
  ) {
    this.message = {
      show: false,
      text: ''
    }
  }

  ngOnInit(): void {
  }

  signIn() {
    if (this.tekshirish(this.name)) {
      return this.bildirgi("Foydalanuchi nomi kiritilmagan!");
    }

    if (this.tekshirish(this.password)) {
      return this.bildirgi("Parol kiritilmagan!");
    }

    let user = { name: this.name, password: this.password };
    this.murojaat.signIn(user).subscribe(response => {
      if (!response.success) {
        this.bildirgi(response.msg);
        return;
      }

      const { data } = response;
      this.authService.login(data.token, data.user);
      this.router.navigate(['/ishmaydon']);
    });
  }

  bildirgi(xabar: string) {
    this.message.show = true;
    this.message.text = xabar;
    setTimeout(() => {
      this.message.show = false;
    }, 4000);
  }

  tekshirish(maydonlar:string) {
    return !(maydonlar.length > 0);
  }
}
