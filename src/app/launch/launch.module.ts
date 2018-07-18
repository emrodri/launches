import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaunchRoutingModule} from './launch-routing.module';
import {LaunchComponent} from './launch.component';
import { LaunchBarComponent } from './launch-bar/launch-bar.component';


@NgModule({
  declarations: [LaunchComponent, LaunchBarComponent],
  imports: [CommonModule, LaunchRoutingModule]
})

export class LaunchModule {
}
