import { Component, inject, Input } from '@angular/core';

import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, ImgBrokenDirective],
})
export class CardPlayerComponent {
  @Input({ required: true }) mode: 'small' | 'big' = 'small';
  @Input({ required: true, alias: 'trackObject' }) track: TrackModel = {
    _id: 0,
    album: '',
    cover: '',
    name: '',
    url: '',
  };

  #multimediaService = inject(MultimediaService);

  sendTrack(track: TrackModel): void {
    this.#multimediaService.trackInfoSignal.set(track);
  }
}
