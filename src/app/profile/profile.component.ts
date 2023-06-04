import {Component, OnInit} from '@angular/core';
import {Profile} from "../models/profile.model";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile!: Profile;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.profile = this.authService.getProfile();
  }
}
