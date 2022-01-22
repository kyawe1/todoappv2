import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoCreateComponent } from './todo-create/todo-create.component';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    SearchBarComponent,
    TodoDetailComponent,
    TodoCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TodoModule { }
