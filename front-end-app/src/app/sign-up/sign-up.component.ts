import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { RequestService } from "../request.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./yangi.component.css']
})
export class SignUpComponent implements OnInit {

  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';

  message: {
    visible: boolean,
    text: string
  }

  constructor(
    private router: Router,
    private request: RequestService) {
    this.message = {
      visible: false,
      text: ''
    }
  }

  ngOnInit(): void {
  }

  kiritish() {
    let user = {
      name: this.name,
      username: this.username,
      password: this.password
    }

    if (this.tekshirish(user.name)) {
      this.bildirgi("Ism kiritilmagan");
      return;
    }

    if (this.tekshirish(user.username)) {
      this.bildirgi("Foydalanuvchi nomi kiritilmagan");
      return;
    }

    if (this.tekshirish(user.password)) {
      this.bildirgi("Parol kiritilmagan");
      return;
    }

    this.request.signUp(user).subscribe(res => {      
      if (!res.success) {
        this.bildirgi(res.msg);
        this.router.navigate(['/qoshish']);
      } else {
        this.router.navigate(['/kirish']);
      }
    });
  }

  bildirgi(xabar: string) {
    this.message.visible = true;
    this.message.text = xabar;
    setTimeout(() => {
      this.message.visible = false;
    }, 4000);
  }

  tekshirish(maydonlar:string) {
    return !(maydonlar.length > 0);
  }
}
