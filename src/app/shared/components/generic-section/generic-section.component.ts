import { Component, Input, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/tracks.model';
import { CardPlayerComponent } from '../card-player/card-player.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-generic-section',
    templateUrl: './generic-section.component.html',
    styleUrls: ['./generic-section.component.scss'],
    standalone: true,
    imports: [
        NgClass,
        NgFor,
        CardPlayerComponent,
    ],
})
export class GenericSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<TrackModel> = [];

  constructor() {}

  ngOnInit(): void {}
}
