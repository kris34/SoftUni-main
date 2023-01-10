import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/interfaces/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  user: IUser | null = null;

  constructor(
    private api: UserServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];

    this.api.getOneUser(id).subscribe({
      next: (user) => {
        this.user = user;
      },
    });
  }
}
