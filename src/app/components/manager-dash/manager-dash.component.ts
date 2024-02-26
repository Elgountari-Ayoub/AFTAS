import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Competition } from 'src/app/models/Competition';
import { Member } from 'src/app/models/Member';
import { CompetitionService } from 'src/app/services/competition.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-manager-dash',
  templateUrl: './manager-dash.component.html',
  styleUrl: './manager-dash.component.css'
})
export class ManagerDashComponent implements OnInit {
  competitions: Competition[] = [];
  members: Member[] = [];

  constructor(
    private competitionService: CompetitionService,
    private memberService: MemberService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadCompetitions();
    this.loadMembers();
  }


  // Competitions Section
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

  // Members Section
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
