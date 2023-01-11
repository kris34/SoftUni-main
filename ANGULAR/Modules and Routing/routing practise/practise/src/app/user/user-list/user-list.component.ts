import { Component, OnInit } from '@angular/core';
import { IUSer } from 'src/app/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})


export class UserListComponent implements OnInit {
  users: IUSer[] | null = null;
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
    });
  }
}
