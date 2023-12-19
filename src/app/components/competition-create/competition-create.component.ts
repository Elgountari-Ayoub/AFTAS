import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import {CompetitionService} from "../../services/competition.service";
import {Router} from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-competition-create',
  templateUrl: './competition-create.component.html',
  styleUrls: ['./competition-create.component.css']
})
export class CompetitionCreateComponent {
  competitionForm: FormGroup
  errorMessages:string[] = []
  constructor(
    private formBuilder:FormBuilder,
    private service:CompetitionService,
    private router:Router,
    private datePipe:DatePipe
  ) {
    this.competitionForm = this.formBuilder.group({
      location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(10)]],
      numberOfParticipants: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
    });
  }

  onsubmit() {
    this.errorMessages = []
    const formattedDate = this.datePipe.transform(this.competitionForm.get('date')?.value, "yyyy-MM-dd");
    const competitionFormWithFormattedDate = {...this.competitionForm.value, date: formattedDate}
    console.log(competitionFormWithFormattedDate)
    this.service.createCompetition(competitionFormWithFormattedDate).subscribe({
      next: competition => this.router.navigate(["/competition"]),
      error: err => {
        if (err.error) {
          Object.keys(err.error).forEach(key => {
            this.errorMessages.push(err.error[key]);
          });
          console.log(this.errorMessages)
        }
        console.log(err)
      }
    })
  }
}
