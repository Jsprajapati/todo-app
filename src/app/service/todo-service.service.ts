import { Injectable } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Injectable()
export class TodoServiceService {

  todos : ToDo[] = [];
  constructor() { }

  addToDo(todo: ToDo){
    this.todos.push(todo);
  }

  getTodos(){
    return this.todos;
  }

  editTodo(todo : ToDo){
    let index = this.todos.findIndex(t => t.title === todo.title);

    if(index > -1){
      this.todos[index] = todo;
    }
  }

  deleteTodo(todo : ToDo){
    let index = this.todos.findIndex(t => t.title === todo.title);

    if(index > -1){
      this.todos.splice(index,1);
    }
  }
}
