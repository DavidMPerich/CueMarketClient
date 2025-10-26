import { Component, inject, OnInit } from '@angular/core';
import { CueService } from '../../../core/services/cue-service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Cue } from '../../../types/cue';

@Component({
  selector: 'app-cue-detailed',
  imports: [AsyncPipe, RouterLink, RouterLinkActive, CurrencyPipe],
  templateUrl: './cue-detailed.html',
  styleUrl: './cue-detailed.css'
})
export class CueDetailed implements OnInit {
  private cueService = inject(CueService);
  private route = inject(ActivatedRoute);
  protected cue$?: Observable<Cue>;

  ngOnInit() {
    this.cue$ = this.loadCue();
  }

  loadCue() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    return this.cueService.getCue(id);
  }
}
