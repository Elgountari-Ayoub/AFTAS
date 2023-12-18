import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/models/Competition';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class AppComponent implements OnInit {
  competitions: Competition[] = [];

  constructor(private competitionService: CompetitionService) {}

  ngOnInit(): void {
    this.loadCompetitions();
  }

  loadCompetitions(): void {
    this.competitionService.getAllCompetitions().subscribe(
      (data) => {
        this.competitions = data;
      },
      (error) => {
        console.error('Error loading competitions:', error);
      }
    );
  }
}
