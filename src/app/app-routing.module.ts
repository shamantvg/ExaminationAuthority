import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageNotfound } from './page-notfound-component/page-notfound-component.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: { title: 'results : ' }
  },
  {
    path: 'results',
    component: IndexComponent,
    data: { title: 'results : ' }
  },
  {
    path: '**',
    component: PageNotfound,
    data: { title: 'PageNotfoundComponent : ' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }