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
export class ManagerDashComponent {
  
}
