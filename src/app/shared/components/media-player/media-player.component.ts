import { Component, OnDestroy, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  observersList$: Array<Subscription> = [];
  state: string = 'paused';

  constructor(public multimediaService: MultimediaService) {
  }

  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$.subscribe((state: string) => {
      this.state = state;
    });

    this.observersList$.push(observer1$);
  }

  ngOnDestroy(): void {
    this.observersList$.forEach((observer) => observer.unsubscribe());
  }
}
