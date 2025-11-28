import { Component, inject } from '@angular/core';
import { CueService } from '../../../core/services/cue-service';
import { Observable } from 'rxjs';
import { Cue } from '../../../types/cue';
import { AsyncPipe } from '@angular/common';
import { CueCard } from "../cue-card/cue-card";
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-cue-list',
  imports: [AsyncPipe, CueCard],
  templateUrl: './cue-list.html',
  styleUrl: './cue-list.css'
})
export class CueList {
  private cueService = inject(CueService);
  private accountService = inject(AccountService);
  protected cues$: Observable<Cue[]>;
  protected currentUserId$: string | undefined;

  constructor() {
    this.cues$ = this.cueService.getCues();
    this.currentUserId$ = this.accountService.currentUser()?.id;
  }
}
