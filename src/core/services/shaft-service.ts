import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Shaft } from '../../types/shaft';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShaftService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  getShafts(cueId: string) {
    return this.http.get<Shaft[]>(this.baseUrl + 'cues/' + cueId + '/shafts');
  }

  getShaftById(shaftId: string) {
    return this.http.get<Shaft>(this.baseUrl + 'shafts/' + shaftId);
  }
}
