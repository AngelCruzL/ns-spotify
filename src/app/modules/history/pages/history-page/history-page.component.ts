import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
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
