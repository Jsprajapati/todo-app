import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { TodoServiceService } from 'src/app/service/todo-service.service';

@Component({
  selector: 'app-to-do-s',
  templateUrl: './to-do-s.component.html',
  styleUrls: ['./to-do-s.component.css']
})
export class ToDoSComponent implements OnInit {

  todos: ToDo[]; //Model Class 
  constructor(public todoService : TodoServiceService ) { //Service For CRUD Operation on ToDo Object

  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    //Get All ToDo Objects 
  }

  removeTodoFromList(todo: ToDo){
    console.log('[ToDoSComponent]', todo);
    this.todoService.deleteTodo(todo);
    this.todos = this.todoService.getTodos();
  }

}
