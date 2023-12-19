import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css'],
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
      next: () => this.router.navigate(['/members']),
      error: (error) => {
        if (error.error.error != undefined) {
          console.log('err', error.error.error);
          this.errorMessages.push(error.error.error);
        } else {
          Object.keys(error.error).forEach((key) => {
            const errorMessage =
            this.errorMessagesMapping[key] || error.error[key];
            this.errorMessages.push(errorMessage);
        });
        }
      },
    });
  }

  errorMessagesMapping: { [key: string]: string } = {};
}
