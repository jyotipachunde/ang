import { Component, OnInit, Output, ViewChild, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NgForm } from '@angular/forms';


 interface Itodo {
        item: string;
        id: string;
   }

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() editob!:Itodo;
  //todoarr: Itodo[] = [];
   isedit : boolean = false;
   c!: void;

  @Output() emittodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() emmitup:EventEmitter<Itodo>=new EventEmitter<Itodo>();
  @ViewChild('todof') todof!: NgForm;

  constructor() { }

  ngOnInit(): void {
    console.log(this.editob)
   }

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  this.c=console.log(changes['editob']['currentValue'])
  if(changes['editob']['currentValue']){
    this.isedit=true;

    this.todof.form.patchValue(changes['editob']['currentValue'])

  }
}

  submitForm(){
  if(this.todof.valid){
    let todo: Itodo = {
      ...this.todof.value,
      id: Math.random().toString(36).substring(2,9)
    }
    console.log(todo);
    //this.todoarr.push(todo);
    this.todof.reset();
    this.emittodo.emit(todo);
  }

  }
   editForm(editob:Itodo){
    let edit_ob:Itodo={
       ...this.todof.value,
      id:editob.id
    }
    this.todof.reset();
    this.isedit=false;
    this.emmitup.emit(edit_ob);
    
    //this.todof.value=edit.item
    //this.todof.value
}



}
