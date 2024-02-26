import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';
import { Auth } from 'src/app/models/Auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  url: String = ""

  ngOnInit(): void {
  }

  signUpForm: FormGroup;
  errorMessages: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router,
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/\S+/)]],
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required, Validators.pattern(/\S+/)]],
      role: ['', [Validators.required]],
    });
  }

  signUp() {
    const signUpFormValue = { ...this.signUpForm.value };
    this.authService.signUp(signUpFormValue).subscribe({
      next: (response) => {
        if (response.token) {
          this.authService.setAuthToken(response.token);
          const auth = this.authService.getAuthUser();
          this.userService.getById(auth?.id).subscribe({
            next: (fetchedUser) => {
          if (!fetchedUser.isAccepted) {
            Swal.fire({
              icon: 'warning',
              title: 'Not approved',
              text: "You don't have the access yet!",
            });
            this.router.navigate(['/home']);
          }
        },
      });
          switch (auth?.role) {
            case 'MEMBER':
              this.router.navigate(['/']);
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
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        console.log(error.error);
      },
    });
  }



}
