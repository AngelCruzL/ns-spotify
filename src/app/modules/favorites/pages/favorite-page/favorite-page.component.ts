import { Component, OnInit } from '@angular/core';
import { PlaylistBodyComponent } from '../../../../shared/components/playlist-body/playlist-body.component';
import { PlaylistHeaderComponent } from '../../../../shared/components/playlist-header/playlist-header.component';

@Component({
    selector: 'app-favorite-page',
    templateUrl: './favorite-page.component.html',
    styleUrls: ['./favorite-page.component.scss'],
    standalone: true,
    imports: [PlaylistHeaderComponent, PlaylistBodyComponent]
})
export class FavoritePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
