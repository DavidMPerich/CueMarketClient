import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cue } from '../../../types/cue';

@Component({
  selector: 'app-cue-overview',
  imports: [],
  templateUrl: './cue-overview.html',
  styleUrl: './cue-overview.css'
})
export class CueOverview implements OnInit {
  private route = inject(ActivatedRoute);
  protected cue = signal<Cue | undefined>(undefined);

  ngOnInit(): void {
    this.route.parent?.data.subscribe(data =>{
      this.cue.set(data['cue']);
    });
  }
}
