import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public developer: Developer;

  public users: User[];

  public isEditing: boolean = false;

  constructor() {
    this.developer = {
      name: "Anvar",
      surname: "Zaripboyev"
    }

    this.users = [
      {
        id: 1,
        name: "Samandar"
      },
      {
        id: 2,
        name: "Nurbek"
      }
    ];
  }

  ngOnInit(): void {
  }

  add(name: string) {
    if (name) {
      this.users.unshift({
        id: this.users.length + 1,
        name
      });
    }
    return false;
  }

  remove(id: number) {
    for (let i = 0; i <= this.users.length; i++)
      if (this.users[i].id == id) {
        this.users.splice(i, 1);
        break;
      }
  }

  edit() {
    this.isEditing = !this.isEditing;
  }
}

type User = {
  id: number,
  name: string
}

type Developer = {
  name: string
  surname: string
}
