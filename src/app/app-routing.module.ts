import { TodoIndexRouteComponent } from './components/todo-index-route/todo-index-route.component';
import { TodoResolverService } from './todo-resolver.service';
import { TodoRouteComponent } from './components/todo-route/todo-route.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todos',
    component: TodoIndexRouteComponent,
  },
  {
    path: 'todos/:id',
    component: TodoRouteComponent,
    resolve: {
      data: TodoResolverService
    }
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'todos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
