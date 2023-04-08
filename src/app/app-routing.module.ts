import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { NutriLoginComponent } from './NutriLogin/NutriLogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './signUp/signUp.component';
import { DessertsComponent } from './desserts/desserts.component';
import { SaladsComponent } from './salads/salads.component';
import { CommunityComponent } from './community/community.component';
import { CoachComponent } from './coach/coach.component';
import { NutritionistComponent } from './nutritionist/nutritionist.component';
import { YogaComponent } from './yoga/yoga.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OfferComponent } from './offer/offer.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
 },
  {
    path:'NutriLogin',
    component:NutriLoginComponent,
  },

  {
    path:'',
    children:[{
      path:'NutriLogin/signup',
      component:SignUpComponent
    }]
  },
  {
    path:'',
    children:[{
      path:'NutriLogin/signup/NutriLogin',
      component:NutriLoginComponent
    }]
  },
  {
     path:'',
     children:[{
      path:'NutriLogin/admin',
      component:AdminComponent
     }]
  },
  {
    path:'offer',
    component:OfferComponent
  },
  {
    path:'',
    children:[{
     path:'NutriLogin/offer',
     component:OfferComponent
    }]
 },
  {
    path:'desserts',
    component:DessertsComponent
  },
  {
    path:'salads',
    component:SaladsComponent
  },
  {
     path:'registration',
     component:RegistrationComponent
  },
  {
     path:'gallery',
     component:GalleryComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'community',
    component:CommunityComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'coach',
    component:CoachComponent
  },
  {
    path:'yoga',
    component:YogaComponent
  },
  {
    path:'nutritionist',
    component:NutritionistComponent
  },
 {
  path:'navbar',
  component:NavbarComponent
 },
 {
  path:'footer',
  component:FooterComponent
 },
 {
  path:'offer',
  component:OfferComponent
 },
 {
  path:'admin',
  component:AdminComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

