import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Cue } from '../../../types/cue';
import { CueService } from '../../../core/services/cue-service';

@Component({
  selector: 'app-cue-detailed',
  imports: [RouterLink, RouterLinkActive, CurrencyPipe, RouterOutlet],
  templateUrl: './cue-detailed.html',
  styleUrl: './cue-detailed.css'
})
export class CueDetailed implements OnInit {
  private route = inject(ActivatedRoute);
  protected cueService = inject(CueService);
  protected cue = signal<Cue | undefined>(undefined);
  protected isCueOwner = computed(() => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      return user.id === this.cue()?.ownerId;
    } else {
      return false;
    }
  });

  ngOnInit() {
    this.route.data.subscribe({
      next: data => this.cue.set(data['cue'])
    })
  }
}
