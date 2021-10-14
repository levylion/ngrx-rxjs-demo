import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from 'src/candidates/candidates.component';
import { UserDetailsResolver } from 'src/services/user-details.resolver';

const routes: Routes = [{
  path: '',
  component: CandidatesComponent,
  resolve: {userDetails: UserDetailsResolver},
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
