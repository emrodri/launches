import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'},
  {path: 'status/:id/launches', loadChildren: './launches/launches.module#LaunchesModule'},
  {path: 'status/:id/launch/:launchId', loadChildren: './launch/launch.module#LaunchModule'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
