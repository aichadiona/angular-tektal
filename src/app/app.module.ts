import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageNutritionComponent } from './nutrition/landing-page-nutrition/landing-page-nutrition.component';
import { HeaderComponent } from './nutrition/header/header.component';
import { FooterComponent } from './nutrition/footer/footer.component';
import { HomeComponent } from './nutrition/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageNutritionComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
