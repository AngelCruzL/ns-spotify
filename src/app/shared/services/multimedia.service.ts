import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  trackInfo$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  timeElapsed$: BehaviorSubject<string> = new BehaviorSubject<string>('00:00');
  timeRemaining$: BehaviorSubject<string> = new BehaviorSubject<string>('-00:00');
  audio!: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe((track: TrackModel) => {
      if (track) this.setAudio(track);

      this.#listenAllEvents();
    });
  }

  #listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.#calculateTime, false);
  }

  #calculateTime = (): void => {
    const { duration, currentTime } = this.audio;
    this.#setTimeElapsed(currentTime);
    this.#setTimeRemaining(currentTime, duration);
  };

  #setTimeElapsed(currentTime: number): void {
    const minutes = Math.floor((currentTime / 60) % 60);
    const seconds = Math.floor(currentTime % 60);
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const result = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(result);
  }

  #setTimeRemaining(currentTime: number, duration:number): void {
    let timeRemaining = duration - currentTime;
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const result = `-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(result);
  }

  setAudio(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }
}
