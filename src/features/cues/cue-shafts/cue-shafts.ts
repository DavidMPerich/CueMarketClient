import { Component, inject } from '@angular/core';
import { ShaftService } from '../../../core/services/shaft-service';
import { Observable, take } from 'rxjs';
import { Shaft } from '../../../types/shaft';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShaftCard } from "../shaft-card/shaft-card";

@Component({
  selector: 'app-cue-shafts',
  imports: [AsyncPipe, FormsModule, CommonModule, ShaftCard],
  templateUrl: './cue-shafts.html',
  styleUrl: './cue-shafts.css'
})
export class CueShafts {
  private shaftService = inject(ShaftService);
  private route = inject(ActivatedRoute);
  protected shafts$: Observable<Shaft[]> | null = null;
  protected selectedShaftId: string | null = null;
  protected selectedShaft$: Observable<Shaft | null> | null = null;

  constructor() {
    const cueId = this.route.parent?.snapshot.paramMap.get('id');

    if (cueId) {
      this.shafts$ = this.shaftService.getShafts(cueId);
      this.shafts$.pipe().subscribe(shafts => {
        if (shafts.length > 0) {
          this.selectedShaftId = shafts[0].id;
          this.selectedShaft$ = this.shaftService.getShaftById(this.selectedShaftId);
        }
      });
    }
  }

  protected onShaftSelectChange() {
    if (this.selectedShaftId) {
      this.selectedShaft$ = this.shaftService.getShaftById(this.selectedShaftId);
    }
  }
}
