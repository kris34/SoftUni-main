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
  completedTasks: string[] = [];

  constructor(private service: TodoService) {}

  todo: string = '';

  @Input() count: number = 0;

  addTask(value: { todo: string; id: number }, form: NgForm) {
    let id = 0;
    value.id = id;

    if (!value.todo) {
      return;
    }

    if (this.tasks.includes(value.todo)) {
      return;
    }
    this.tasks.push(value.todo);
    this.count++;
    form.reset();
  }

  removeTask(task: string) {
    this.tasks = this.tasks.filter((t) => t != task);
    this.completedTasks.push(task);
    this.count--;
  }

  
}
