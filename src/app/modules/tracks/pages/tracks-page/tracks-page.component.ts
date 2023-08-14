import { Component, Input } from '@angular/core';

import { TrackModel } from '@core/models/tracks.model';
import { GenericSectionComponent } from '@shared/components/generic-section/generic-section.component';
import {
  getAllTracks$,
  getRandomTracks$,
} from '@modules/tracks/services/track-fn.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss'],
  standalone: true,
  imports: [GenericSectionComponent, NgIf],
})
export class TracksPageComponent {
  @Input() currentUser: any;
  @Input() category: any;

  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  constructor() {
    getAllTracks$().subscribe(tracks => (this.tracksTrending = tracks));
    getRandomTracks$().subscribe(tracks => (this.tracksRandom = tracks));
  }
}
