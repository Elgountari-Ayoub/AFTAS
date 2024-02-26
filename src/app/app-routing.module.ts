import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { CompetitionCreateComponent } from './components/competition-create/competition-create.component';
import { HuntingsComponent } from './components/huntings/huntings/huntings.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { MembersComponent } from './components/members/members/members.component';
import { MemberCreateComponent } from './components/members/member-create/member-create.component';
import { ManagerDashComponent } from './components/manager-dash/manager-dash.component';
import { ManagerCompetitionsComponent } from './components/manager-dash/manager-competitions/manager-competitions.component';
import { ManagerMembersComponent } from './components/manager-dash/manager-members/manager-members.component';
import { ManagerHuntingsComponent } from './components/manager-dash/manager-huntings/manager-huntings.component';
import { ManagerUsersComponent } from './components/manager-dash/manager-users/manager-users.component';
import { JuryCompetitionsComponent } from './components/jury-dash/jury-competitions/jury-competitions.component';
import { JuryDashComponent } from './components/jury-dash/jury-dash.component';
import { JuryMembersComponent } from './components/jury-dash/jury-members/jury-members.component';
import { JuryHuntingsComponent } from './components/jury-dash/jury-huntings/jury-huntings.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'competition', component: CompetitionComponent },
  { path: 'competition-create', component: CompetitionCreateComponent },
  { path: 'members', component: MembersComponent },
  { path: 'member-create', component: MemberCreateComponent },
  { path: 'huntings', component: HuntingsComponent },
  { path: 'home', component: HomeComponent },


  {
    path: 'manager-dash', component: ManagerDashComponent, children: [
      { path: 'competitions', component: ManagerCompetitionsComponent },
      { path: 'members', component: ManagerMembersComponent },
      { path: 'huntings', component: ManagerHuntingsComponent },
      { path: 'users', component: ManagerUsersComponent },
      { path: '', redirectTo: 'competitions', pathMatch: 'full' },


    ]
  },

  {
    path: 'jury-dash', component: JuryDashComponent, children: [
      { path: 'competitions', component: JuryCompetitionsComponent },
      { path: 'members', component: JuryMembersComponent },
      { path: 'huntings', component: JuryHuntingsComponent },
      { path: '', redirectTo: 'competitions', pathMatch: 'full' },


    ]
  },



  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
