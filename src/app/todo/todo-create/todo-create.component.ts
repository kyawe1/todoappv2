import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {Todo} from '@models/todo';
@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  @Output()
  create=new EventEmitter<Todo>();

  form = this.formbuilder.group(
    {
      "todo_name":new FormControl('',Validators.required),
      "compeleted": [false, Validators.required]
    }
  )

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  OnCreate(){
    console.log('clicked')
    let temp:Todo={
      todo_name:this.form.get('todo_name')?.value || '',
      compeleted:this.form.get('compeleted')?.value||false
    };
    console.log(temp)
    this.create.emit(temp);
  }
}
