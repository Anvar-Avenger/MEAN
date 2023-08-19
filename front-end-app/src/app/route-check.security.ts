import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class Kirilgan implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {    
    if (this.authService.isSessionActive()) {      
      return true;
    } else {
      this.router.navigate(['/kirish']);
      return false;
    }
  }
}
