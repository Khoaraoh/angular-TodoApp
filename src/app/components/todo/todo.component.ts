import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList:string[] = []; 

  inputTodo:string = '';

  editValue:string = '';

  isEditNow:number = -1;

  constructor() { }

  ngOnInit(): void {
    this.todoList = [
      'First task',
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

  @ViewChild("inputField") inputField:any;

  handleEdit(id: number){
    this.isEditNow = id;
    this.editValue = this.todoList[id];
    this.inputField.nativeElement.focus();
  }

  handleSubmitEdit(id: number){
    this.todoList[id] = this.editValue;
    console.log(this.todoList);
    this.isEditNow = -1;
    this.editValue = '';
  }
}
