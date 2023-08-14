import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { customUntilDestroy } from '@core/utils/custom-until-destroy';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss'],
  standalone: true,
  imports: [NgTemplateOutlet, NgIf, ImgBrokenDirective, NgClass, AsyncPipe],
})
export class MediaPlayerComponent implements OnInit {
  multimediaService = inject(MultimediaService);
  customUntilDestroy = customUntilDestroy();

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  state: string = 'paused';

  ngOnInit(): void {
    this.multimediaService.playerStatus$
      .pipe(this.customUntilDestroy())
      .subscribe((state: string) => (this.state = state));
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
