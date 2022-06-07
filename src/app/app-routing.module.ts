import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'books/:isbn',
  loadChildren: () => import('./book/detail/detail.module').then(m => m.DetailModule)
}, {
  path: 'books',
  loadChildren: () => import('./book/list/list.module').then(m => m.ListModule)
}, {
  path: 'movies/:id',
  loadChildren: () => import('./movie/detail/detail.module').then(m => m.DetailModule)
}, {
  path: 'movies',
  loadChildren: () => import('./movie/list/list.module').then(m => m.ListModule)
}, {
  path: '',
  redirectTo: '/books?maxItems=12',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
