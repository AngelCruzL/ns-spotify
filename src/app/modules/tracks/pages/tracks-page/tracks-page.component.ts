import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss'],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  observersList$: Subscription[] = [];

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    const tracksTrending$ = this.trackService.dataTracksTrending$.subscribe(
      (tracks: Array<TrackModel>) => (this.tracksTrending = tracks)
    );

    const tracksRandom$ = this.trackService.dataTracksRandom$.subscribe(
      (tracks: Array<TrackModel>) => (this.tracksRandom = tracks)
    );

    this.observersList$.push(tracksTrending$);
    this.observersList$.push(tracksRandom$);
  }

  ngOnDestroy(): void {
    this.observersList$.forEach(observer => observer.unsubscribe());
  }
}
