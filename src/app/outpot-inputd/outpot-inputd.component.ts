import { Component, Input, OnInit } from '@angular/core';

interface Itodo {
  id: string;
  item: string;
}

@Component({
  selector: 'app-outpot-inputd',
  templateUrl: './outpot-inputd.component.html',
  styleUrls: ['./outpot-inputd.component.css']
})
export class OutpotInputdComponent implements OnInit {
  editob!:Itodo


  todoarr: Array<Itodo>= [
    {
      item: "js",
      id: 'k1w5lb1'
    },
    {
      item: "ts",
      id: 'k0y4wrs'
    }
];
todo!: Itodo;

constructor() {
  const stored = localStorage.getItem("todoarr");
  if(stored){
    this.todoarr = JSON.parse(stored); 
  }else{
    this.todoarr = [];
  }
console.log(this.todoarr);
  //localStorage.setItem("todoarr", JSON.stringify(this.todoarr));
}

  ngOnInit(): void {
    console.log(this.editob);
  }


   gettodo(todo: Itodo) {
    //const stored = localStorage.getItem("todoarr");
   // if (stored) {
    //  this.todoarr = JSON.parse(stored);
   // }
    this.todoarr.unshift(todo);
    console.log(todo);
    localStorage.setItem("todoarr", JSON.stringify(this.todoarr));

  }

  onedit(todo:Itodo){
    console.log(todo);
    this.editob=todo;
    console.log(this.editob);
  }

  getup(edit_ob:Itodo){
    let geti=this.todoarr.findIndex(t=>t.id===edit_ob.id);
    this.todoarr[geti].item=edit_ob.item;
    console.log(geti);
     // localStorage.setItem("todoarr", JSON.stringify(this.todoarr));
      localStorage.setItem("todoarr", JSON.stringify(this.todoarr));
  }
}

