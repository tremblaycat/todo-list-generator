import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold laundry',
      completed: false,
    },
    {
      task: 'exercise',
      completed: false,
    },
    {
      task: 'bake cookies',
      completed: true,
    },
  ];

  searchTerm: string;

  showIndex: number;

  constructor() {}

  addTask(form: NgForm) {
    let newItem: Todo = {
      task: form.value.task,
      completed: false,
    };
    this.todos.push(newItem);
    form.reset();
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  completeTask(index: number) {
    this.todos[index].completed = true;
  }

  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.trim().toLowerCase();
  }

  myFilterMethod() {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((chore) => {
        let currentTask = chore.task.toLowerCase().trim();
        return currentTask.includes(this.searchTerm);
      });
    }
  }

  setShowIndex(index: number) {
    this.showIndex = index;
  }

  resetShowIndex() {
    this.showIndex = undefined;
  }

  ngOnInit(): void {}
}
