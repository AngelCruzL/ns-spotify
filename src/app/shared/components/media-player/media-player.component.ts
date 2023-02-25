import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'daf',
    album: 'test',
    name: '',
    url: '',
    _id: 7,
  };

  constructor(private multimediaService: MultimediaService) {}
  mediaPlayerSubscription!: Subscription;

  ngOnInit(): void {
    this.mediaPlayerSubscription = this.multimediaService.callback.subscribe(
      (track: TrackModel) => {
        console.log(track);
      }
    );
  }

  ngOnDestroy(): void {
    this.mediaPlayerSubscription.unsubscribe();
  }
}
