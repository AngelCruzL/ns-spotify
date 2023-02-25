import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as dataRaw from '@core/../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  dataTracksTrending$: Observable<TrackModel[]>;
  dataTracksRandom$: Observable<TrackModel[]>;

  constructor() {
    const { data } = (dataRaw as any).default;

    this.dataTracksTrending$ = of(data);
    this.dataTracksRandom$ = of(data);
  }
}
