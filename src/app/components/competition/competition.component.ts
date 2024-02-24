import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Competition } from 'src/app/models/Competition';
import { CompetitionService } from 'src/app/services/competition.service';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/Member';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RankingId } from 'src/app/models/RankingId';
import { Ranking } from 'src/app/models/Ranking';

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

  rankingIdForm!: FormGroup;
  errorMessages: string[] = [];



  constructor(
    private competitionService: CompetitionService,
    private memberService: MemberService,
    private formBuilder: FormBuilder,
    private router: Router
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

  onDateChange(event: any): void {
    const selectedValue = event.target.value;
    console.log(selectedValue);

    if (selectedValue == 'passed') {
      console.log("wa33");

      this.loadPassedCompetitions();
    } else if (selectedValue == 'today') {
      this.loadTodayCompetition();
    } else if (selectedValue == 'upcoming') {
      this.loadUpcomingCompetitions();
    } else {
      this.loadCompetitions();
    }
  }

  loadPassedCompetitions(): void {
    this.competitionService.getPassedCompetitions().subscribe(
      (data) => {
        this.competitions = data.content;
      },
      (error) => {
        console.error('Error loading competitions:', error);
      }
    );
  }

  loadTodayCompetition(): void {
    this.competitionService.getTodayCompetition().subscribe(
      (data) => {
        this.competitions = [data];
      },
      (error) => {
        console.error('Error loading competitions:', error);
      }
    );
  }


  loadUpcomingCompetitions(): void {
    this.competitionService.getUpcomingCompetitions().subscribe(
      (data) => {
        this.competitions = data.content;
      },
      (error) => {
        console.error('Error loading competitions:', error);
      }
    );
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
    this.errorMessages = [];
    const rankingIdForm = { ...this.rankingIdForm.value };
    const rankingId: RankingId = {
      memberNum: rankingIdForm.memberNum,
      competitionCode: rankingIdForm.competitionCode,
    };

    const ranking: Ranking = {
      id: rankingId,
      member: null,
      competition: null,
      rank: 0,
      score: 0,
    };

    this.competitionService.joinCompetition(ranking).subscribe({
      next: (competition) => {
        this.router.navigate(['/competition']);
      },
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



  showMemberModal() {
    let membermodal = document.getElementById('memberModal');
    if (membermodal != null) {
      membermodal.classList.remove('hidden');
      setTimeout(() => {
        if (membermodal != null) {
          // membermodal.classList.remove('opacity-0');
        }
      }, 20);
    }
  }

  hideMemberModal() {
    let membermodal = document.getElementById('memberModal');
    if (membermodal != null) {

      // membermodal.classList.add('opacity-0');
      setTimeout(() => {
        if (membermodal != null) {

          membermodal.classList.add('hidden');
        }
      }, 500);
    }
  }
}
