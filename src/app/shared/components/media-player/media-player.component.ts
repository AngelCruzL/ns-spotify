import { Component, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss'],
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'daf',
    album: 'test',
    name: '',
    url: '',
    _id: 7,
  };

  constructor() {}

  ngOnInit(): void {}
}
