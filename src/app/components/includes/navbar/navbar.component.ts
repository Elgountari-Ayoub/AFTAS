import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/Auth';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) {}
  logout() {
    this.authService.clearAuthToken();
    this.router.navigate(['/login']);
  }
  authUser?: User | null;
  ngOnInit(): void {
    this.userService.getById(this.authService.getAuthUser()?.id).subscribe(
      (res) => {
        if (res) {
          this.authUser = res;
        } else console.log(res);
      },
      () => {

        
      }
      
    );

    console.log(this.authUser);
  }
}
