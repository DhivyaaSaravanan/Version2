import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { NutriLoginComponent } from './NutriLogin/NutriLogin.component';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './signUp/signUp.component';
import { DessertsComponent } from './desserts/desserts.component';
import { SaladsComponent } from './salads/salads.component';
import { CommunityComponent } from './community/community.component';
import { CoachComponent } from './coach/coach.component';
import { NutritionistComponent } from './nutritionist/nutritionist.component';
import { YogaComponent } from './yoga/yoga.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OfferComponent } from './offer/offer.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      NutriLoginComponent,
      RegistrationComponent,
      SignUpComponent,
      DessertsComponent,
      SaladsComponent,
      CommunityComponent,
      CoachComponent,
      NutritionistComponent,
      YogaComponent,
      NavbarComponent,
      FooterComponent,
      GalleryComponent,
      OfferComponent,
      AdminComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


