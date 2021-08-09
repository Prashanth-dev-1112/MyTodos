import { Router } from '@angular/router';
import { TodoService } from './../../todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-index-route',
  templateUrl: './todo-index-route.component.html',
  styleUrls: ['./todo-index-route.component.scss']
})
export class TodoIndexRouteComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.getTodos();
  }

  async getTodos() {
    this.todos = await this.todoService.getTodos();
  }
}
