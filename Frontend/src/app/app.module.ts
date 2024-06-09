import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { Routes, RouterModule } from "@angular/router"
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'sell', component: AddPropertyComponent },
  { path: 'rent', component: AddPropertyComponent },
  { path: 'buy', component: AddPropertyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    LandingPageComponent,
    
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule { }
