import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DecimalPipe} from '@angular/common';
const routes: Routes = [
  {
    path: 'movies',
    loadChildren:()=>import('./movies/movies.module').then(m=>m.MoviesModule)
  },
  {
    path:'',
    redirectTo:'movies',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DecimalPipe]
})
export class AppRoutingModule { }
