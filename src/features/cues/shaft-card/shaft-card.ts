import { Component, input } from '@angular/core';
import { Shaft } from '../../../types/shaft';

@Component({
  selector: 'app-shaft-card',
  imports: [],
  templateUrl: './shaft-card.html',
  styleUrl: './shaft-card.css'
})
export class ShaftCard {
  shaft = input.required<Shaft>();
}
