import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  signInForm: FormGroup;
  errorMessages: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router,
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required, Validators.pattern(/\S+/)]],
    });
  }

  async signIn() {
    this.errorMessages = [];

    const signInFormValue = { ...this.signInForm.value };

    this.authService.signIn(signInFormValue).subscribe({
      next: (respone) => {
        if (respone.token) this.authService.setAuthToken(respone.token);
        const auth = this.authService.getAuthUser();
        this.userService.getById(auth?.id).subscribe({
          next: (fetchedUser) => {
            if (!fetchedUser.isAccepted) {
                Swal.fire({
                  icon: 'error',
                  title: 'Not approved',
                  text: 'You don\'t have the access yet!',
                })
              this.router.navigate(['/home']);
            }
              
          }
        });
        switch (auth?.role) {
          case 'MEMBER':
            this.router.navigate(['/member-dash']);
            break;
          case 'JURY':
            this.router.navigate(['/jury-dash']);
            break;
          case 'MANAGER':
            this.router.navigate(['/manager-dash']);
            break;
          default:
            this.router.navigate(['/']);
        }
      },
      error: (error) => {
        console.log('ERROR: ', error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error,
        });
      },
    });
  }


}
