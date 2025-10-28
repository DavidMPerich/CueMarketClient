import { Component, inject, OnInit, signal } from '@angular/core';
import { CueService } from '../../../core/services/cue-service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Cue } from '../../../types/cue';

@Component({
  selector: 'app-cue-detailed',
  imports: [AsyncPipe, RouterLink, RouterLinkActive, CurrencyPipe, RouterOutlet],
  templateUrl: './cue-detailed.html',
  styleUrl: './cue-detailed.css'
})
export class CueDetailed implements OnInit {
  private cueService = inject(CueService);
  private route = inject(ActivatedRoute);
  protected cue = signal<Cue | undefined>(undefined);

  ngOnInit() {
    this.route.data.subscribe({
      next: data => this.cue.set(data['cue'])
    })
  }
}
