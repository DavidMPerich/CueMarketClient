import { Component, inject, OnInit, signal } from '@angular/core';
import { Cue } from '../../../types/cue';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cue-butt',
  imports: [],
  templateUrl: './cue-butt.html',
  styleUrl: './cue-butt.css'
})
export class CueButt implements OnInit {
private route = inject(ActivatedRoute);
  protected cue = signal<Cue | undefined>(undefined);

  ngOnInit(): void {
    this.route.parent?.data.subscribe(data =>{
      this.cue.set(data['cue']);
    });
  }
}
