import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorProfileComponent } from './author-profile/author-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorListComponent
  },
  {
    path: ':id',
    component: AuthorProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
