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
  selector: 'app-huntings',
  templateUrl: './huntings.component.html',
  styleUrls: ['./huntings.component.css']
})
export class HuntingsComponent implements OnInit {

  competition: Competition | null = null;
  members: Member[] = [];
  ranking: Ranking[] = [];
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
    this.loadTodayCompetition();
    console.log(this.competition);
    
    // this.loadMembers();
  }

  loadTodayCompetition(): void {
    this.competitionService.getTodayCompetition().subscribe(
      (data) => {
        // console.log("ssssssss", this.competition);
        
        this.competition = data;
        console.log("vvvvvvvvvvvvvvv", this.competition);
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
}
