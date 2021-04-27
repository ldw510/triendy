import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GetTheAppComponent } from './get-the-app/get-the-app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeamComponent } from './team/team.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, GetTheAppComponent, ContactUsComponent, TeamComponent, HomePageComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
