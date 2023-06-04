import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  login(username: string, password: string): boolean {
    if (username === 'demo' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  getProfile(): Profile {
    const dummyProfile: Profile = {
      username: 'demo',
      email: 'demo@example.com',
      firstName: 'John',
      lastName: 'Doe',
    };
    return dummyProfile;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}

interface Profile {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}
