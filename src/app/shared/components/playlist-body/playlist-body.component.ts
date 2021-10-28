import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

import * as dataRaw from '@data/tracks.json';

@Component({
  selector: 'app-playlist-body',
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.scss'],
})
export class PlaylistBodyComponent implements OnInit {
  tracks: TrackModel[] = [];

  constructor() {}

  ngOnInit(): void {
    const { data } = (dataRaw as any).default;
    this.tracks = data;
  }
}
