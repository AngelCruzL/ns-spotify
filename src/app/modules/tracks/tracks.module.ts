import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { TracksRoutingModule } from './tracks-routing.module';

import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';

@NgModule({
  declarations: [TracksPageComponent],
  imports: [CommonModule, TracksRoutingModule, SharedModule],
})
export class TracksModule {}
