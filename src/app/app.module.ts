import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { Whatdewho2Component } from './whatdewho2/whatdewho2.component';
import { STUDIESComponent } from './studies/studies.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';
import { PricingComponent } from './pricing/pricing.component';
import { WhoareweoneComponent } from './whoareweone/whoareweone.component';
import { WhoarewetowComponent } from './whoarewetow/whoarewetow.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WhatwedoComponent,
    Whatdewho2Component,
    STUDIESComponent,
    WhoareweComponent,
    PricingComponent,
    WhoareweoneComponent,
    WhoarewetowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
