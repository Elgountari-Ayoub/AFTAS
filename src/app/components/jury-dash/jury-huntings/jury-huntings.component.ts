import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/models/Competition';
import { CompetitionService } from 'src/app/services/competition.service';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/Member';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/Ranking';
import { CompetitionRankings } from 'src/app/models/CompetitionRankings';
import { FishService } from 'src/app/services/fish.service';
import { Fish } from 'src/app/models/Fish';
import { HuntingService } from 'src/app/services/hunting.service';
import { Hunting } from 'src/app/models/Hunting';

@Component({
  selector: 'app-jury-huntings',

  templateUrl: './jury-huntings.component.html',
  styleUrl: './jury-huntings.component.css'
})
export class JuryHuntingsComponent  implements OnInit {

  competition: Competition | null = null;
  member: Member | null = null;
  competitionRankings: CompetitionRankings | null = null;
  hunting: Hunting | null = null;

  members: Member[] = [];
  ranking: Ranking[] = [];
  fishId: number | null = null;
  numberOfFish: number | null = null;
  memberId?: number | null = null;
  competitionCode: string | null = null;

  fishes: Fish[] = [];

  huntingForm: FormGroup;
  errorMessages: string[] = []

  constructor(
    private competitionService: CompetitionService,
    private memberService: MemberService,
    private formBuilder: FormBuilder,
    private router: Router,
    private fishService: FishService,
    private huntingService: HuntingService,
  ) {
    this.huntingForm = this.formBuilder.group({
      fishId: ['', [Validators.required]],
      numberOfFish: [1, [Validators.required, Validators.min(1), Validators.max(100)]],
    });
  }

  setHuntingFormValues(competitionCode: string | null, memberId?: number | null): void {
    if (competitionCode !== null && memberId !== null) {
      this.competitionCode = competitionCode;
      this.memberId = memberId;


      this.showHuntingModal(  );
    }
  }

  clearHuntingFormValues(): void {
    this.competitionCode = null;
    this.memberId = null;

    this.errorMessages = [];
  }

  ngOnInit(): void {
    this.loadTodayCompetition();
    this.loadFishes();
  }

  loadTodayCompetition(): void {
    this.competitionService.getTodayCompetition().subscribe(
      (data) => {
        this.competition = data;
        if (this.competition && this.competition.code) {
          this.loadCompetitionMembers(this.competition.code)
        }
      },
      (error) => {
        console.error('Error loading competitions:', error);
      }
    );
  }


  loadCompetitionMembers(competitionCode: string): void {
    this.competitionService.getCompetitionMembers(competitionCode).subscribe(
      (data) => {
        this.competitionRankings = data;
      },
      (error) => {
        console.error('Error loading competition Rankings:', error);
      }
    );
  }
  loadFishes(): void {
    this.fishService.getAllFishes().subscribe(
      (data) => {
        this.fishes = data.content;
      },
      (error) => {
        console.error('Error loading competition Rankings:', error);
      }
    );
  }

  onHunt() {
    this.errorMessages = []
    const huntingFormValue = { ...this.huntingForm.value }
    console.log(huntingFormValue.memberId);

    const hunting: any = {
      fish: {
        id: huntingFormValue.fishId
      },
      competition: {
        code: this.competitionCode

      },
      member: {
        id: this.memberId,
      },
      numberOfFish: huntingFormValue.numberOfFish,
    };

    this.huntingService.save(hunting).subscribe({
      next: (hunting) => {
        // console.log(hunting);
        this.clearHuntingFormValues();
        this.router.navigate(["/manager-dash/huntings"])
        this.loadTodayCompetition();
        this.loadFishes();
      },
      error: (error) => {
        console.log(error);

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



  showHuntingModal() {
    let huntingmodal = document.getElementById('huntingModal');
    if (huntingmodal != null) {
      huntingmodal.classList.remove('hidden');
      setTimeout(() => {
        if (huntingmodal != null) {
          // huntingmodal.classList.remove('opacity-0');
        }
      }, 20);
    }
  }

  hideHuntingModal() {
    let huntingmodal = document.getElementById('huntingModal');
    if (huntingmodal != null) {

      // huntingmodal.classList.add('opacity-0');
      setTimeout(() => {
        if (huntingmodal != null) {

          huntingmodal.classList.add('hidden');
        }
      }, 500);
    }
  }
}

