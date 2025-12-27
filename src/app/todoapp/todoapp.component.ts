import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  isEditMode :boolean= false;
   uid:string='';

  
  todoarr:Array<Itodoapp>=[
    {todoitem:'ts', id:123},
    {todoitem:'js', id:124},
    {todoitem:'angular', id:125}];

    //@ViewChild('todoitem') todoInput!: ElementRef;

  constructor(
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  addTodo(){
    let todoobj: Itodoapp ={
      todoitem:this.todoitem.nativeElement.value,
      id:Math.random()*1000
    };
    this.todoarr.push(todoobj);
    this.todoitem.nativeElement.value='';
    this._snackBar.open('Todo Added Successfully','close',{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:2000,
    });
  }

  //trackByid(index: number, item: Itodoapp): number {
   // return item.id;
  //}

  deleteTodo(id: number){
    let geti=this.todoarr.findIndex(todo => todo.id === id);
    if (geti !== -1) {
      this.todoarr.splice(geti, 1);

      this._snackBar.open('Todo deleted  Successfully','close',{
      horizontalPosition:'right',
      verticalPosition:'top',
      duration:2000,
    });
    }
  }

edittodo(todo: Itodoapp){
    this.todoitem.nativeElement.value=todo.todoitem;
    this.isEditMode=true;
    this.uid=todo.id.toString();
   // this.isEditMode=true;

}
updatetodo(){
  let ob={
    todoitem:this.todoitem.nativeElement.value,
    id:Number(this.uid)
  };
  let indexget=this.todoarr.findIndex(t=>t.id===ob.id);
  this.todoarr[indexget].todoitem=ob.todoitem;
  this.isEditMode=false;
  this.todoitem.nativeElement.value='';
  this._snackBar.open('Todo updated Successfully','close',{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:2000,
    });

  }

}

