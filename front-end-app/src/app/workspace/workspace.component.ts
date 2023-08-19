import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void { }

  chiqish() {
    this.router.navigate(['/kirish']);
    this.authService.logout();
  }
}
