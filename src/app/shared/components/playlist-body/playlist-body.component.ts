import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-playlist-body',
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.scss']
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
