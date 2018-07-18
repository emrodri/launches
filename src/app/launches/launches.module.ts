import {NgModule} from '@angular/core';
import {LaunchesRoutingModule} from './launches-routing.module';
import {LaunchesComponent} from './launches.component';
import {CommonModule} from '@angular/common';
import {LaunchesBarComponent} from './launches-bar/launches-bar.component';
import {LaunchItemComponent} from './launches-list/launch-item/launch-item.component';
import {LaunchesListComponent} from './launches-list/launches-list.component';

@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchesListComponent,
    LaunchesBarComponent,
    LaunchItemComponent
  ],
  imports: [CommonModule, LaunchesRoutingModule]
})

export class LaunchesModule {
}

