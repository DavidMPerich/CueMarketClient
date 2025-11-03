import { Component, inject, OnInit, signal } from '@angular/core';
import { Cue } from '../../../types/cue';
import { ActivatedRoute } from '@angular/router';
import { PointPatternDisplay } from '../../../enums/point-pattern';
import { PointTypeDisplay } from '../../../enums/point-type';
import { ButtSleeveInlayDesignDisplay } from '../../../enums/butt-sleeve-inlay-design';
import { RingDesignDisplay } from '../../../enums/ring-design';

@Component({
  selector: 'app-cue-butt',
  imports: [],
  templateUrl: './cue-butt.html',
  styleUrl: './cue-butt.css'
})

export class CueButt implements OnInit {
  private route = inject(ActivatedRoute);
  protected cue = signal<Cue | undefined>(undefined);
  public PointPatternDisplay = PointPatternDisplay;
  public PointTypeDisplay = PointTypeDisplay;
  public ButtSleeveInlayDesignDisplay = ButtSleeveInlayDesignDisplay;
  public RingDesignDisplay = RingDesignDisplay;

  ngOnInit(): void {
    this.route.parent?.data.subscribe(data =>{
      this.cue.set(data['cue']);
    });
  }
}
