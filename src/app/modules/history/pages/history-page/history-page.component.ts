import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PlaylistBodyComponent } from '../../../../shared/components/playlist-body/playlist-body.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.scss'],
    standalone: true,
    imports: [SearchComponent, PlaylistBodyComponent, AsyncPipe]
})
export class HistoryPageComponent implements OnInit {
  tracksList$: Observable<any> = of([]);

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  receiveData(event: string) {
    this.tracksList$ = this.searchService.searchTracks$(event);
  }
}
