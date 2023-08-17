import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './@pages/about/about.component';
import { HomeComponent } from './@pages/home/home.component';
import { WorkComponent } from './@pages/work/work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './@components/header/header.component';
import { NavComponent } from './@components/nav/nav.component';
import { FooterComponent } from './@components/footer/footer.component';
import { BadgeComponent } from './@components/badge/badge.component';
import { SocialIconsComponent } from './@components/social-icons/social-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    BadgeComponent,
    SocialIconsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
