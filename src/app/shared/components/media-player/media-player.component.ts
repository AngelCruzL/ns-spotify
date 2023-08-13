import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
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

  handlePosition(event: MouseEvent) {
    const { clientX } = event;
    const progressBarElement = this.progressBar.nativeElement;
    const { x, width } = progressBarElement.getBoundingClientRect();
    const clickXPosition = clientX - x;
    const percentageFromX = (clickXPosition * 100) / width;
    this.multimediaService.seekAudio(percentageFromX);
  }
}
