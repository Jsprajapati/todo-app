import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/service/todo-service.service';
import { ToDo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: ToDo[]; //Model Class 
  constructor(public todoService: TodoServiceService ) { //Service For CRUD Operation on ToDo Object

  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    //Get All ToDo Objects 
  }

}
