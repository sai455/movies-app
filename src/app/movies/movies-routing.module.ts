import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent as MoviesListComponent } from './list/list.component';
import { DetailComponent as MovieDetailsComponent} from './detail/detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo:'list',
        pathMatch:'full'
    },
    {
        path: 'list',
        component:MoviesListComponent,
        data: { title: 'Movies List' }
    },
    {
        path: ':id',
        component:MovieDetailsComponent,
        data: { title: 'Movie Details' }
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
