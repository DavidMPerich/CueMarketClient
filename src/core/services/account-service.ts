import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginCreds, RegisterCreds, User } from '../../types/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  currentUser = signal<User | null>(null);

  baseUrl = 'https://localhost:7132/api/';

  register(creds: RegisterCreds) {
    creds.roles = ['User'];
    return this.http.post<any>(this.baseUrl + 'auth/register', creds);
    // return this.http.post<any>(this.baseUrl + 'auth/register', creds).pipe(
    //   tap(user => {
    //     console.log('in the tap method');
    //     if (user) {
    //       this.setCurrentUser(user);
    //     }
    //   })
    // );
  }

  login(creds: LoginCreds) {
    return this.http.post<User>(this.baseUrl + 'auth/login', creds).pipe(
      tap(user => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
