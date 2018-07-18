import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusComponent } from './status-list/status/status.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent, StatusListComponent, StatusComponent],
  exports: []
})
export class HomeModule {}
