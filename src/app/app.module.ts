import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {LaunchesPageComponent} from './launches-page/launches-page.component';
import {LaunchesListComponent} from './launches/lauches-list/launches-list.component';
import {LaunchesSearchComponent} from './launches-page/launches-search/launches-search.component';
import {LaunchesCounterComponent} from './launches-page/launches-list/launches-counter/launches-counter.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {LaunchEffects} from './store/launch/launch.effects';
import {AgencyEffects} from './store/agency/agency.effects';
import {StatusEffects} from './store/status/status.effects';
import {MissionTypeEffects} from './store/mission-type/mission-type.effects';
import {ServiceWorkerModule} from '@angular/service-worker';
import {UiEffects} from './store/ui/ui.effects';
import {AppRoutingModule} from './app-routing.module';
import { TitleBarComponent } from './main/title-bar/title-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LaunchEffects, AgencyEffects, StatusEffects, MissionTypeEffects, UiEffects]),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
