import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  tasks: string[] = [];
  todo: string = '';

  constructor(private service: TodoService) {}

  addTask() {
    this.tasks?.push(this.todo);
    this.todo = '';
  }
}
