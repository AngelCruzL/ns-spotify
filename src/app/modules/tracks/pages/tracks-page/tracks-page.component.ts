import { Component, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/tracks.model';

import * as dataRaw from '@data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss'],
})
export class TracksPageComponent implements OnInit {
  mockTrackList: Array<TrackModel> = [];

  constructor() {}

  ngOnInit(): void {
    const { data } = (dataRaw as any).default;
    this.mockTrackList = data;
  }
}
