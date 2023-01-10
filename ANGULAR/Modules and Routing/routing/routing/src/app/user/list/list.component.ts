import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/interfaces/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: IUser[] | null = null;

  constructor(private userApi: UserServiceService) {}

  ngOnInit(): void {
    this.userApi.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
    });
  }

  showDetails(){ 

  }

  
}
