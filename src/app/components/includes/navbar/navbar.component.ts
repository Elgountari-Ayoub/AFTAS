import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/Auth';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  logout() {
    this.authService.clearAuthToken();
    localStorage.removeItem('recruiter');
    this.router.navigate(['/login']);
  }
  authUser?: Auth | null;
  ngOnInit(): void {
    this.authUser = <Auth>this.authService.getAuthUser();
  }
}
