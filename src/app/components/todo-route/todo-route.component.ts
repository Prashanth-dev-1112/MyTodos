import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-route',
  templateUrl: './todo-route.component.html',
  styleUrls: ['./todo-route.component.scss']
})
export class TodoRouteComponent implements OnInit {

  todo: any;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.todo = data);
  }

  goHome() {
    this.route.navigateByUrl('/todos');
  }

}
