import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { OrderListPipe } from '../../pipe/order-list.pipe';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-playlist-body',
    templateUrl: './playlist-body.component.html',
    styleUrls: ['./playlist-body.component.scss'],
    standalone: true,
    imports: [NgFor, NgTemplateOutlet, ImgBrokenDirective, OrderListPipe]
})
export class PlaylistBodyComponent implements OnInit {
  @Input() tracks: TrackModel[] = [];
  sortOpt: { property: string | null; order: 'asc' | 'desc' } = {
    property: null,
    order: 'asc'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSort(property: string): void {
    const { order } = this.sortOpt;
    this.sortOpt = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    };

    console.log(this.sortOpt);
  }
}
