import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Competition } from 'src/app/models/Competition';
import { CompetitionService } from 'src/app/services/competition.service';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/Member';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RankingId } from 'src/app/models/RankingId';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
})
export class CompetitionComponent implements OnInit {
  competitions: Competition[] = [];
  members: Member[] = [];
  competitionCode: string | null = null;
  memberNum: number | null = null;

  rankingIdForm: FormGroup;
  errorMessages:string[] = []


  constructor(
    private competitionService: CompetitionService,
    private memberService: MemberService,
    private formBuilder: FormBuilder,
    private router:Router,

  ) {
    this.rankingIdForm = this.formBuilder.group({
      competitionCode: ['', Validators.required],
      memberNum: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    this.loadCompetitions();
    this.loadMembers();
  }

  onCompetitionChange() {
    console.log('Selected Competition:', this.competitionCode);
  }
  onMemberChange() {
    console.log('Selected Member num:', this.memberNum);
  }

  loadCompetitions(): void {
    this.competitionService.getAllCompetitions().subscribe(
      (data) => {
        this.competitions = data.content;
      },
      (error) => {
        console.error('Error loading competitions:', error);
      }
    );
  }

  loadMembers(): void {
    this.memberService.getAllMembers().subscribe(
      (data) => {
        this.members = data.content;
      },
      (error) => {
        console.error('Error loading members:', error);
      }
    );
  }
  register() {
    this.errorMessages = []
    const rankingIdForm = {...this.rankingIdForm.value}
    console.log(rankingIdForm)

    const rankingId: RankingId = {
      id: {
        memberNum: rankingIdForm.memberNum,
        competitionCode: rankingIdForm.competitionCode,
      },
    };
    this.competitionService.joinCompetition(rankingId).subscribe({
      next: competition => {
        console.log("wa33 competition" , competition);
        
        this.router.navigate(["/competition"])},
      error: err => {
        if (err.error && err.error.errors) {
          Object.keys(err.error.errors).forEach((key) => {
            const errorMessage = this.errorMessagesMapping[key] || err.error.errors[key];
            this.errorMessages.push(errorMessage);
          });
        }
        console.log(this.errorMessages);
      }
    });
  }
  errorMessagesMapping: { [key: string]: string } = {
  };
  
}
