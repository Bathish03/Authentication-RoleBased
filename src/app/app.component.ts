import { Component, DoCheck } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './service/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck {
  title = 'login-page';

  ismenurequired = false;
  isadminuser = false;
  constructor(private router: Router, private service: AuthService) {}

  ngDoCheck(): void {
    let currenturl = this.router.url;
    if (currenturl == '/login' || currenturl == '/register') {
      this.ismenurequired = false;
    } else {
      this.ismenurequired = true;
    }
    if(this.service.GetUserRole() === 'admin') {
      this.isadminuser = true
    } else {
      this.isadminuser = false
    }
     
  }
}
