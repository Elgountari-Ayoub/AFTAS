import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DatePipe } from '@angular/common';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {
  memberForm: FormGroup;
  errorMessages: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private memberService: MemberService,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.memberForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      familyName: ['', Validators.required],
      nationality: ['', Validators.required],
      identityNumber: ['', [Validators.required]],
      identityDocument: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.errorMessages = [];
  
    const memberFormValue = { ...this.memberForm.value };
  
    this.memberService.createMember(memberFormValue).subscribe({
      next: () => this.router.navigate(["/members"]),
      error: (err) => {
        if (err.error && err.error.errors) {
          Object.keys(err.error.errors).forEach((key) => {
            // Check if the error key exists in the errorMessages mapping
            const errorMessage = this.errorMessagesMapping[key] || err.error.errors[key];
            this.errorMessages.push(errorMessage);
          });
        }
        console.log(this.errorMessages);
      }
    });
  }
  
  // Define a mapping for specific error messages
  errorMessagesMapping: { [key: string]: string } = {
  };
  
}

