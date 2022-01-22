import { Component, OnInit } from '@angular/core';
import { TodoService } from '@service/todo.service';
import { isEmpty } from 'rxjs';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todolist!: Todo[];
  todoData: Todo | undefined;
  showDetail: boolean = false;
  constructor(private todo: TodoService) { }

  ngOnInit(): void {
    this.todo.get_all().subscribe(data => this.todolist = data);
  }
  clicker(temp: Todo): void {
    this.todoData = temp;
    this.showDetail = true;
  }
  close(): void {
    this.todoData = undefined;
    this.showDetail = false;
  }
  OnUpdate(temp:Todo){
    this.todo.update(temp.id ||1 ,temp).subscribe(data=>console.log(data));
  }
  OnCreate(temp:Todo){
    this.todo.create(temp).subscribe(data=>console.log(data));
  }
  OnSearch(search:string){
    console.log('searching');
    this.todo.search(search).subscribe(data=>{
      this.todolist=data
    } 
    );
  }
}
