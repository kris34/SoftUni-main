import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  tasks: string[] = [];

  constructor(private service: TodoService) {}
  todo = '';

  addTask(value: { todo: string }, form: NgForm) {
    this.tasks.push(value.todo);
    form.reset()
  }
}
