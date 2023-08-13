import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

@NgModule({
    imports: [CommonModule, HistoryRoutingModule, SharedModule, FormsModule, HistoryPageComponent, SearchComponent],
})
export class HistoryModule {}
