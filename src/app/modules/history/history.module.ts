import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { SearchComponent } from './components/search/search.component';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

@NgModule({
    imports: [CommonModule, HistoryRoutingModule, FormsModule, HistoryPageComponent, SearchComponent],
})
export class HistoryModule {}
