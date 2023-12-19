import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/includes/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CompetitionComponent } from './components/competition/competition.component';
import { CompetitionCreateComponent } from './components/comptition/competition-create/competition-create.component';
// import { CompetitionComponent } from './components/competition/competition.component';
// import CompetitionC

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompetitionComponent,
    CompetitionCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
