import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';

import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, SharedModule, HomePageComponent],
})
export class HomeModule {}
