import { Component } from '@angular/core';
import {UserService} from "../services/auth.service";
import {UserModel} from "../models/user.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: UserModel;
  username: string | null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = {
      username: '',
      password: '',
      hasTakenTest: false
    };
    // @ts-ignore
    this.username = localStorage.getItem('username').toString();
    this.searchUserByUsername(this.username);
  }

  searchUserByUsername(username: string) {
    this.userService.searchUserByUsername(username).subscribe(
      (response: UserModel) => {
        this.user = response;
      },
      (error) => {
        console.error('Failed to search user:', error);
      }
    );
  }
}


