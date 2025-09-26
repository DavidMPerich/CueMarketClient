import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http = inject(HttpClient)
  protected title = 'Cue Market';
  protected cues = signal<any>([]);

  ngOnInit(): void {
    this.http.get('https://localhost:7132/api/Cues').subscribe({
      next: response => this.cues.set(response),
      error: err => console.error(err),
      complete: () => console.log('done')
    });
  }
}