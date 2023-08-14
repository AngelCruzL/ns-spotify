import {
  Component,
  effect,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

import { MultimediaService } from '@shared/services/multimedia.service';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss'],
  standalone: true,
  imports: [NgTemplateOutlet, NgIf, ImgBrokenDirective, NgClass, AsyncPipe],
})
export class MediaPlayerComponent {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  state: string = 'paused';
  multimediaService = inject(MultimediaService);

  constructor() {
    effect(() => {
      this.state = this.multimediaService.playerStatusSignal();
    });
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
