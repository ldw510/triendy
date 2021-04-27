import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PartnerDetailComponent } from './pages/partner-detail/partner-detail.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { TripDetailComponent } from './pages/trip-detail/trip-detail.component';
import { EthosComponent } from './pages/ethos/ethos.component';



const routes: Routes = [
  { path:'',redirectTo:'home', pathMatch:'full'},
  { path: 'home', component:HomeComponent },
  { path: 'partner', component:PartnerComponent },
  { path: 'partner-detail', component:PartnerDetailComponent },
  { path: 'trip-detail/:id', component: TripDetailComponent },
  { path: 'ethos', component: EthosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
