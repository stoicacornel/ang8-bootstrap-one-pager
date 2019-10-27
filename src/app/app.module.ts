import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DownArrowComponent } from './components/down-arrow/down-arrow.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { SpeakerContentComponent } from './components/speaker-content/speaker-content.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    DownArrowComponent,
    HomeComponent,
    TopBarComponent,
    AboutContentComponent,
    SpeakerContentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
