import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { TrackModel } from '@core/models/tracks.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  readonly #apiUrl = environment.api;

  constructor(private httpClient: HttpClient) {}

  #skipTrackById(
    trackList: TrackModel[],
    trackId: number
  ): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const newTrackList = trackList.filter(track => track._id !== trackId);
      resolve(newTrackList);
    });
  }

  getAllTracks(): Observable<TrackModel[]> {
    return this.httpClient
      .get<TrackModel[]>(`${this.#apiUrl}/tracks`)
      .pipe(map(({ data }: any) => data));
  }

  getRandomTracks(): Observable<TrackModel[]> {
    return this.httpClient
      .get<TrackModel[]>(`${this.#apiUrl}/tracks`)
      .pipe(mergeMap(({ data }: any) => this.#skipTrackById(data, 4)));
  }
}
