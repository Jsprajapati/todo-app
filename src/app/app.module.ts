import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoServiceService } from './service/todo-service.service';
// import { TodoComponent } from './todo/todo.component';
import { ToDoSComponent } from './components/to-do-s/to-do-s.component';
import { ToDoComponent } from './components/to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    // TodoComponent,
    ToDoSComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
