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
  sortOpt: { property: string | null; order: 'asc' | 'desc' } = {
    property: null,
    order: 'asc',
  };

  constructor() {}

  ngOnInit(): void {
    const { data } = (dataRaw as any).default;
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.sortOpt;
    this.sortOpt = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    };

    console.log(this.sortOpt);
  }
}
