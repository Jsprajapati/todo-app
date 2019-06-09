import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoServiceService } from 'src/app/service/todo-service.service';
import { ToDo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;
  titleControl: FormControl;
  descriptionControl : FormControl;
  dateControl : FormControl;

  constructor(private todoService: TodoServiceService) { 
    //Init FormControl
    this.titleControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.descriptionControl=new FormControl('',[Validators.required,Validators.minLength(20)]);
    this.dateControl=new FormControl('',[Validators.required]);

//Init FormGroup
    this.todoForm = new FormGroup({
      title : this.titleControl,
      description : this.descriptionControl,
      date: this.dateControl
    })

  }

  ngOnInit() {
  }


  submitForm(todo: ToDo){
    //Save ToDo Object
    // On CLick Submit
    console.table(todo);
    this.todoService.addToDo(todo);
    this.todoForm.reset();
  }

}
