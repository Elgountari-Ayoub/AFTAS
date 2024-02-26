import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';
import { Auth } from 'src/app/models/Auth';

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
    private router: Router,
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/\S+/)]],
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required, Validators.pattern(/\S+/)]],
      role: ['MEMBER'],
    });
  }

  signUp() {
    const signUpFormValue = { ...this.signUpForm.value };
    this.authService.signUp(signUpFormValue).subscribe({
      next: (response) => {
        if (response.token) {
          this.authService.setAuthToken(response.token);
          const auth = this.authService.getAuthUser();
          switch (auth?.role) {
            case 'MEMBER':
              this.router.navigate(['/agent-dash']);
              break;
            case 'JURY':
              this.router.navigate(['/dashboard']);
              break;
            case 'MANAGER':
              this.router.navigate(['/user-dash']);
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
