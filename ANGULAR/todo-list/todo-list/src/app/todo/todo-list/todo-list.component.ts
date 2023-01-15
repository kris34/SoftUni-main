import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  tasks: string[] = [];

  constructor(private service: TodoService) {}

  addTask(task: string) {
    this.tasks.push(task);
    console.log(this.tasks);
  }

  
}
