import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  @Input() todo: ToDo;
  @Output() remove = new EventEmitter<ToDo>();
  
  constructor() { }

  ngOnInit() {
  }

  removeToDo(){
    console.log('[ToDoComponent] - ' + this.todo);
    this.remove.emit(this.todo);
  }

}
