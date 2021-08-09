import { TodoResponse } from './models/TodoResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from './models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: TodoResponse[];
  todo: Todo[];
  todoArr: Todo[];
  dataTransform: Todo[];
  startDate = 1590969600000;
  endDate = 1591401600000;

  constructor(private http: HttpClient) { }

  private transform(start: number, end: number, todoResponse: TodoResponse[]) {
    var date = new Date(+start + Math.random() * (end - start));
    this.todoArr = Object.assign([], todoResponse);
      for (var i = 0; i < todoResponse.length; i++) {
        this.todoArr[i].dueDate = date;
      }
    this.todoArr.sort((a, b) => {
      return new Date(b.dueDate).valueOf() - new Date(a.dueDate).valueOf();
    }
    )
    return this.todoArr;
  }

  async getTodos() {
    const data = await this.http.get<TodoResponse[]>(environment.apiUrl + '/todos').toPromise();
    this.todos = Object.assign([], data);
    this.dataTransform = this.transform(this.startDate, this.endDate, this.todos);
    return this.dataTransform;
  }

  async getTodo(id: number) {
    const data = await this.http.get<TodoResponse[]>(environment.apiUrl + '/todos/' + id).toPromise();
    this.todo = Object.assign([], data);
    for(var i=0; i<this.todos.length; i++) {
      if(this.todo['title'] == this.todos[i].title) {
        this.todo['dueDate'] = this.todoArr[i].dueDate;
      }
    }
    return this.todo;
  }
}
