import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private api:ApiService) { }

  get_all():Observable<Todo[]>{
    return this.api.get<Todo[]>("todo");
  }
  get_one(id:number):Observable<Todo>{
    return this.api.get<Todo>(`todo/${id}`);
  }
  update(id:number,obj:Todo):Observable<boolean>{
    return this.api.update<Todo>(`todo/${id}`,obj);
  }
  create(obj:Todo){
    return this.api.create<Todo>('todo/',obj);
  }
  search(searchstring:string):Observable<Todo[]>{
    return this.api.get<Todo>(`todo?search_string=${searchstring}`) || [];
  }
}
