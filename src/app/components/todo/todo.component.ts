import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() title: string;
  @Input() dueDate: Date;
  @Input() id: number;
  @Input() completed: boolean;
  

  constructor(private router: Router) {
  }
  
  ngOnInit(): void {
  }

  getTodo(id: number) {
    this.router.navigateByUrl('/todos/' + id, { state: { data: id } });

  }

}

