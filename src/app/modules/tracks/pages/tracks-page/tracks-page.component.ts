import { Component, OnDestroy, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { GenericSectionComponent } from '../../../../shared/components/generic-section/generic-section.component';

@Component({
    selector: 'app-tracks-page',
    templateUrl: './tracks-page.component.html',
    styleUrls: ['./tracks-page.component.scss'],
    standalone: true,
    imports: [GenericSectionComponent],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.loadAllTracks();
    this.loadRandomTracks();
  }

  ngOnDestroy(): void {}

  async loadAllTracks(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise();
  }

  loadRandomTracks(): void {
    this.trackService.getRandomTracks$().subscribe(tracks => {
      this.tracksRandom = tracks;
    });
  }
}
