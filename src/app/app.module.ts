import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HttpClientModule } from '@angular/common/http'; 
import { DataService } from './data.service';
import { DetailEpisodeComponent } from './detail-episode/detail-episode.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './authguard';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EpisodesComponent,
    DetailEpisodeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
   
}
