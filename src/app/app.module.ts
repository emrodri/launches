import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { LaunchesPageComponent } from './launches-page/launches-page.component';
import { LaunchesListComponent } from './launches-page/launches-list/launches-list.component';
import { LaunchesSearchComponent } from './launches-page/launches-search/launches-search.component';
import { LaunchesCounterComponent } from './launches-page/launches-list/launches-counter/launches-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LaunchesPageComponent,
    LaunchesListComponent,
    LaunchesSearchComponent,
    LaunchesCounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
