import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../../models/todo';
import { sample } from 'rxjs';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input()
  public sampledata!:Todo[];
  @Output()
  public handleclick:EventEmitter<Todo>=new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
    
  }

  Onclick(todo:Todo){
    console.log('clicked');
    this.handleclick.emit(todo);
  }

  
}
