import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Cue } from '../../types/cue';

@Injectable({
  providedIn: 'root'
})
export class CueService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  getCues() {
    return this.http.get<Cue[]>(this.baseUrl + 'cues');
  }

  getCue(id: string) {
    return this.http.get<Cue>(this.baseUrl + 'cues/' + id);
  }
}
