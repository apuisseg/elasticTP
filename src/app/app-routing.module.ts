import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EpisodesComponent} from './episodes/episodes.component';
import {DetailEpisodeComponent} from './detail-episode/detail-episode.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './authguard';

const routes: Routes = [ 
  { path: 'episodes', component: EpisodesComponent,  canActivate:[AuthGuard]},
  {path: 'details/:title', component: DetailEpisodeComponent,  canActivate:[AuthGuard]},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
