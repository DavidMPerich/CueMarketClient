import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';
import { Home } from "../features/home/home";

@Component({
  selector: 'app-root',
  imports: [Nav, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private accountService = inject(AccountService);
  private http = inject(HttpClient)
  protected title = 'Cue Market';
  protected cues = signal<any>([]);

  ngOnInit(): void {
    this.http.get('https://localhost:7132/api/Cues').subscribe({
      next: response => this.cues.set(response),
      error: err => console.error(err),
      complete: () => console.log('done')
    });
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
}