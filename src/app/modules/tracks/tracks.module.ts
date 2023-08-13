import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { TracksRoutingModule } from './tracks-routing.module';

import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';

@NgModule({
    imports: [CommonModule, TracksRoutingModule, TracksPageComponent],
})
export class TracksModule {}
