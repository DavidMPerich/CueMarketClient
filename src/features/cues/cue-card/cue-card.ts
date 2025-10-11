import { Component, input } from '@angular/core';
import { Cue } from '../../../types/cue';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cue-card',
  imports: [RouterLink],
  templateUrl: './cue-card.html',
  styleUrl: './cue-card.css'
})
export class CueCard {
 cue = input.required<Cue>();
}
