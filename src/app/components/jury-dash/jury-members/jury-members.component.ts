import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/Member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-jury-members',
  templateUrl: './jury-members.component.html',
  styleUrl: './jury-members.component.css'
})
export class JuryMembersComponent  implements OnInit {

  members: Member[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.loadMembers();
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
