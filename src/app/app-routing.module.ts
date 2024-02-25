import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { CompetitionCreateComponent } from './components/competition-create/competition-create.component';
import { MembersComponent } from './components/members/members/members.component';
import { MemberCreateComponent } from './components/members/member-create/member-create.component';
import { HuntingsComponent } from './components/huntings/huntings/huntings.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'competition', component: CompetitionComponent },
  { path: 'competition-create', component: CompetitionCreateComponent },
  { path: 'members', component: MembersComponent },
  { path: 'member-create', component: MemberCreateComponent },
  { path: 'huntings', component: HuntingsComponent },
  { path: '', redirectTo: '/competition', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
