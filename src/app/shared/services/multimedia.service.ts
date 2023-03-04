import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  trackInfo$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  audio!: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe((track: TrackModel) => {
      console.log('track', track)
      if (track) this.setAudio(track);
    });
  }

  setAudio(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }
}
