import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HelloComponent } from './hello/hello.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
