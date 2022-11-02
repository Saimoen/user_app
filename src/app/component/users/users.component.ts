import { Response } from './../../interface/response.interface';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  response: Response;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers(10).subscribe((item: any) => {
      console.log(item);
      this.response = item;
    });
  }
}
