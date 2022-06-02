import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList:string[] = []; 

  inputTodo:string = '';

  constructor() { }

  ngOnInit(): void {
    this.todoList = [
      'Frist task',
      'Second task'
    ]
  }

  handleAdd()
  {
    this.todoList.push(this.inputTodo);
    this.inputTodo='';
  }

  handleDelete(id: number){
    this.todoList.splice(id, 1);
  }

}
