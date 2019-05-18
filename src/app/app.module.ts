import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistComponent } from './Components/artist/artist.component';
import { GenreComponent } from './Components/genre/genre.component';
import { HeaderComponent } from './Components/header/header.component';
import { PlayerComponent } from './Components/player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistService } from './Services/artists.service';
import { SafeUrlPipe } from './Pipes/safeUrl/safe-url.pipe';
import { SingleArtistComponent } from './Components/single-artist/single-artist.component';
import { InitialPageComponent } from './Components/initial-page/initial-page.component';
import { SliderComponent } from './Components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    GenreComponent,
    HeaderComponent,
    PlayerComponent,
    SafeUrlPipe,
    SingleArtistComponent,
    InitialPageComponent,
    SliderComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
