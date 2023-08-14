import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { TrackModel } from '@core/models/tracks.model';
import { environment } from 'src/environments/environment';

const apiUrl = environment.api;

export function getAllTracks$(): Observable<TrackModel[]> {
  return inject(HttpClient)
    .get<TrackModel[]>(`${apiUrl}/tracks`)
    .pipe(map(({ data }: any) => data));
}

export function getRandomTracks$(): Observable<TrackModel[]> {
  return inject(HttpClient)
    .get<TrackModel[]>(`${apiUrl}/tracks`)
    .pipe(
      mergeMap(({ data }: any) => skipTrackById(data, 4)),
      catchError(({ status, statusText }) => {
        console.table(status, statusText);
        return of([]);
      }),
    );
}

export function skipTrackById(
  trackList: TrackModel[],
  trackId: number,
): Promise<TrackModel[]> {
  return new Promise((resolve, reject) => {
    const newTrackList = trackList.filter(track => track._id !== trackId);
    resolve(newTrackList);
  });
}
