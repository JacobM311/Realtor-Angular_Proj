import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing-service/housing.service';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'sell', component: AddPropertyComponent },
  { path: 'rent', component: LandingPageComponent },
  { path: 'buy', component: LandingPageComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx918s4ycP4CCMLNMpFfp11ge0S8mKxrA",
  authDomain: "realtor-app-b1db9.firebaseapp.com",
  databaseURL: "https://realtor-app-b1db9-default-rtdb.firebaseio.com",
  projectId: "realtor-app-b1db9",
  storageBucket: "realtor-app-b1db9.appspot.com",
  messagingSenderId: "1058539682573",
  appId: "1:1058539682573:web:f4122c4d3a63dfe8a38e44",
  measurementId: "G-17GQRX2Q1Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [		
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    LandingPageComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
