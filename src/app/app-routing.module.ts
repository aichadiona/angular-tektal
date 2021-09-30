import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageNutritionComponent } from './nutrition/landing-page-nutrition/landing-page-nutrition.component';
import { HomeComponent } from './nutrition/home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
