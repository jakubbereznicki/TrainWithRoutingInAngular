import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberComponent } from './listOfNumbers/number/number.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './listOfNumbers/details/details.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
