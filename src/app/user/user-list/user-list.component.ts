import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UserService) { }

  getUsers() {
    this.userService.userList().then((res) => {
      console.log(res);
      this.users = res;
    }).catch((err) => {
      console.log(err);
    })
  }
  ngOnInit(): void {
    this.getUsers()
  }

}
