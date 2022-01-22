import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path:"todo",component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
