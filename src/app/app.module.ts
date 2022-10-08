import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardMainComponent } from './components/card-main/card-main.component';
import { CardLabelPricingComponent } from './components/card-main/card-label-pricing/card-label-pricing.component';
import { CardLabelTagComponent } from './components/card-main/card-label-tag/card-label-tag.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CardMainComponent,
    CardLabelPricingComponent,
    CardLabelTagComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
