import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import Todo from '../SERVICES AND MODELS/todo.model';
import { todoService } from '../SERVICES AND MODELS/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  constructor( private todoService: todoService
  ) { }

  public newTodo: Todo = new Todo()
  todosList: Todo[];

  ngOnInit() : void {
    this.todoService.getToDos()
      .subscribe(todos => {
        //assign the todolist property to the proper http response
        this.todosList = todos
        console.log(todos)
      })
  }


}
