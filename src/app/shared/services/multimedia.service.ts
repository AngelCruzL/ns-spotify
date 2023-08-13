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
  playerStatus$: BehaviorSubject<string> = new BehaviorSubject<string>('paused');
  playerPercentage$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  audio!: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe((track: TrackModel) => {
      if (track) this.setAudio(track);

      this.#listenAllEvents();
    });
  }

  setAudio(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }

  togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause();
  }

  seekAudio(percentage: number): void {
    const { duration } = this.audio;
    this.audio.currentTime = (percentage * duration) / 100;
  }

  #listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.#calculateTime, false);
    this.audio.addEventListener('playing', this.#setPlayerStatus, false);
    this.audio.addEventListener('play', this.#setPlayerStatus, false);
    this.audio.addEventListener('pause', this.#setPlayerStatus, false);
    this.audio.addEventListener('ended', this.#setPlayerStatus, false);
  }

  #setPlayerStatus = (state: any) => {
    switch (state.type) {
      case 'playing':
        this.playerStatus$.next('playing');
        break;

      case 'play':
        this.playerStatus$.next('play');
        break;

      case 'ended':
        this.playerStatus$.next('ended');
        break;

      default:
        this.playerStatus$.next('paused');
    }
  };

  #calculateTime = (): void => {
    const { duration, currentTime } = this.audio;
    this.#setTimeElapsed(currentTime);
    this.#setTimeRemaining(currentTime, duration);
    this.#setPercentage(currentTime, duration);
  };

  #setTimeElapsed(currentTime: number): void {
    const minutes = Math.floor((currentTime / 60) % 60);
    const seconds = Math.floor(currentTime % 60);
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const result = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(result);
  }

  #setTimeRemaining(currentTime: number, duration: number): void {
    let timeRemaining = duration - currentTime;
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const result = `-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(result);
  }

  #setPercentage(currentTime: number, duration: number): void {
    const percentage = (currentTime / duration) * 100;
    this.playerPercentage$.next(percentage);
  }
}
