import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manager-users',
  templateUrl: './manager-users.component.html',
  styleUrl: './manager-users.component.css',
})
export class ManagerUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data.content;
        console.log(this.users);
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  acceptedUser(id: number | null | undefined) {
    if (id)
      this.userService.validate(id).subscribe((data) => {
        console.log(data);
        this.loadUsers();

    });
  }
}
