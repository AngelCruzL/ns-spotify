import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule],
})
export class SearchComponent implements OnInit {
  @Output() callbackData: EventEmitter<any> = new EventEmitter();
  src: string = '';

  constructor() {}

  ngOnInit(): void {}

  callSearch(searchTerm: string): void {
    if (searchTerm.length >= 3) {
      this.callbackData.emit(searchTerm);
    }
  }
}
