import { Component, Input, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-generic-section',
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.scss'],
})
export class GenericSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<TrackModel> = [];

  constructor() {}

  ngOnInit(): void {}
}
