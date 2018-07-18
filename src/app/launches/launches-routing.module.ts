import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LaunchesComponent} from './launches.component';

const routes: Routes = [
  {path: '', component: LaunchesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesRoutingModule {
}