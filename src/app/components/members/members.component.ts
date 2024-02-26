import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/Member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  @Input() members: Member[] = [];
}