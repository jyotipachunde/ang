import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface Itodoapp {
  id: number;
  todoitem: string;
}

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {
  @ViewChild('todoitem') todoitem!: ElementRef;
  
  todoarr:Array<Itodoapp>=[
    {todoitem:'ts', id:123},
    {todoitem:'js', id:124},
    {todoitem:'angular', id:125}];

    @ViewChild('todoitem') todoInput!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  addTodo(){
    let todoobj: Itodoapp ={
      todoitem:this.todoitem.nativeElement.value,
      id:Math.random()*1000
    };
    this.todoarr.push(todoobj);
    this.todoitem.nativeElement.value='';
  }

  //trackByid(index: number, item: Itodoapp): number {
   // return item.id;
  //}

  deleteTodo(id: number){
    let geti=this.todoarr.findIndex(todo => todo.id === id);
    if (geti !== -1) {
      this.todoarr.splice(geti, 1);
    }
  }
}

