import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
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
      },
      error: (error) => {
        console.log('ERROR: ', error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error,
          footer: error,
        });
      },
    });
  }


}