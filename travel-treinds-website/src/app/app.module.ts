import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GetTheAppComponent } from './components/get-the-app/get-the-app.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamComponent } from './components/team/team.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PartnerComponent } from './pages/partner/partner.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { PartnerDetailComponent } from './pages/partner-detail/partner-detail.component';
import { TripDetailComponent } from './pages/trip-detail/trip-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContactUsComponent,
    GetTheAppComponent,
    HeaderComponent,
    TeamComponent,
    PartnerComponent,
    PartnerDetailComponent,
    TripDetailComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }],
  //providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
