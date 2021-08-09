import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TodoService } from './todo.service';
import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoResolverService implements Resolve<Todo[]> {

  constructor(private todoService: TodoService) { }

  resolve(activatedRoute: ActivatedRouteSnapshot) {
    return this.todoService.getTodo(activatedRoute.params.id);
  }

 
}
