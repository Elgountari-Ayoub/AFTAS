import { Component, Input } from '@angular/core';
import { Competition } from 'src/app/models/Competition';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.css'
})
export class CompetitionsComponent {
  @Input() competitions: Competition[] = [];
}
