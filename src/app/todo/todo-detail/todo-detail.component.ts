import { Component, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Output()
  close:EventEmitter<Todo>=new EventEmitter<Todo>();
  @Output()
  edit=new EventEmitter<Todo>();
  @Input()
  todo:Todo|undefined;
  form=this.formbuilder.group({
    "todo_name":['',Validators.required],
    "compeleted":['',Validators.required]
  }
  )
  is_edit:boolean=false;
    constructor(private formbuilder:FormBuilder) { }

  // private intialize_form(todo:Todo | undefined){
  //   this.form.setValue(
  //     {
  //       "todo_name":todo?.todo_name,
  //       "compeleted":todo?.compeleted
  //     }
  //   )
  // }

  ngOnInit(): void {
    // if(this.todo){
    //   this.intialize_form(this.todo);
    // }
    
  }
  
  Onclose():void{
    this.close.emit();
  }
  OnEdit():void{
    this.is_edit=true;
  }
  OnSubmit():void{
    this.is_edit=false;
    this.edit.emit(this.todo)
  }
}
