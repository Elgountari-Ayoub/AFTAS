import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/includes/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { CompetitionComponent } from './components/competition/competition.component';
import { CompetitionCreateComponent } from './components/competition-create/competition-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashNavbarComponent } from './components/includes/dash-navbar/dash-navbar.component';
import { MemberCreateComponent } from './components/members/member-create/member-create.component';
import { HuntingsComponent } from './components/huntings/huntings/huntings.component';
import { HomeComponent } from './components/home/home.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { MembersComponent } from './components/members/members.component';
import { ManagerDashComponent } from './components/manager-dash/manager-dash.component';
import { DashSidebarComponent } from './components/includes/dash-sidebar/dash-sidebar.component';
import { ManagerDashSidebarComponent } from './components/includes/manager-dash-sidebar/manager-dash-sidebar.component';
import { ManagerCompetitionsComponent } from './components/manager-dash/manager-competitions/manager-competitions.component';
import { ManagerMembersComponent } from './components/manager-dash/manager-members/manager-members.component';
import { ManagerHuntingsComponent } from './components/manager-dash/manager-huntings/manager-huntings.component';
import { ManagerUsersComponent } from './components/manager-dash/manager-users/manager-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashSidebarComponent,
    ManagerDashSidebarComponent,
    DashNavbarComponent,

    MembersComponent,

    HomeComponent,
    LoginComponent,
    SignupComponent,
    CompetitionComponent,
    CompetitionCreateComponent,
    MemberCreateComponent,
    HuntingsComponent,


    CompetitionsComponent,
    MembersComponent,

    ManagerDashComponent,
    ManagerCompetitionsComponent,
    ManagerMembersComponent,
    ManagerHuntingsComponent,
    ManagerUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
