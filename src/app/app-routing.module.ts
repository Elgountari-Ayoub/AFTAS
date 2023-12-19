import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { CompetitionCreateComponent } from './components/competition-create/competition-create.component';
import { MembersComponent } from './components/members/members/members.component';

const routes: Routes = [
  { path: 'competition', component:  CompetitionComponent},
  { path: 'competition-create', component:  CompetitionCreateComponent},
  { path: 'members', component:  MembersComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
