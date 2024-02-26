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
