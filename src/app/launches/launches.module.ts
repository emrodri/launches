import {NgModule} from '@angular/core';
import {LaunchesRoutingModule} from './launches-routing.module';
import {LaunchesComponent} from './launches.component';
import {LaunchesListComponent} from './lauches-list/launches-list.component';
import {CommonModule} from '@angular/common';
import {LaunchesBarComponent} from './launches-bar/launches-bar.component';

@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchesListComponent,
    LaunchesBarComponent
  ],
  imports: [CommonModule, LaunchesRoutingModule]
})

export class LaunchesModule {
}

