import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { PlaylistBodyComponent } from './components/playlist-body/playlist-body.component';

import { OrderListPipe } from './pipe/order-list.pipe';

import { ImgBrokenDirective } from './directives/img-broken.directive';

@NgModule({
  declarations: [
    SidebarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    GenericSectionComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SidebarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    GenericSectionComponent,
    PlaylistHeaderComponent,
    PlaylistBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
  ],
})
export class SharedModule {}
