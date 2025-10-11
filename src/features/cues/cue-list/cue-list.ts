import { Component, inject } from '@angular/core';
import { CueService } from '../../../core/services/cue-service';
import { Observable } from 'rxjs';
import { Cue } from '../../../types/cue';
import { AsyncPipe } from '@angular/common';
import { CueCard } from "../cue-card/cue-card";

@Component({
  selector: 'app-cue-list',
  imports: [AsyncPipe, CueCard],
  templateUrl: './cue-list.html',
  styleUrl: './cue-list.css'
})
export class CueList {
  private cueService = inject(CueService);
  protected cues$: Observable<Cue[]>;

  constructor() {
    this.cues$ = this.cueService.getCues();
  }
}
