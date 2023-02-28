import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  #apiUrl = environment.api;

  constructor(private http: HttpClient) {
  }

  searchTracks$(searchTerm: string): Observable<any> {
    return this.http.get(`${this.#apiUrl}/tracks?src=${searchTerm}`)
      .pipe(map((dataRaw: any) => dataRaw.data));
  }
}
